import React, { useEffect } from 'react';
import { api } from '../../service/api';
import { formatCurrency } from '../../util/formatCurrency';

import {
  Container,
  Headers,
  Title,
  TransactionsList,
  Transaction,
  TransactionDescription,
  TransactionValue
} from './styles'
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from 'react-query';
import {format, parseISO} from 'date-fns';


interface TransactionType{
  id:string
  type: 'credit' | 'debit'
  value:number
  description:string
  account_id:string
  created_at: string
  updated_at: string
  dateFormated: Date
}

export interface TransactionResponseApi{
  transactions: TransactionType[]
  total:{
    credit: number
    debit: number
    total: number
  }
}

export const BalanceArea: React.FC = () => {
  const {account} =useAuth()

  const {data, isLoading, isError} = useQuery('transactions', async ()=>{
    const response = await api.get<TransactionResponseApi>('/transactions')
    const formated =response.data.transactions.map(transaction => ({
      ...transaction,
      created_at: format(parseISO(transaction.created_at), 'dd/LL/Y kk:mm')
    }))
    return {transactions: formated}
  },  {
    staleTime:  60 * 1000 //1min
  })


  useEffect(()=>{

  },[account])

  return (
    <Container>
      <Headers>
        <Title>Descrição</Title>
        <Title>Valor</Title>
        <Title>Data</Title>
      </Headers>

      <TransactionsList>
        {
          isLoading ? <p>Carregando </p> :
          isError ? <p> Falha no carregamento das transações </p> :
          data?.transactions.map((transaction)=>(
            <Transaction>
              <TransactionDescription>{transaction.description}</TransactionDescription>
              <TransactionValue type={transaction.type}>{formatCurrency(  transaction.value)}</TransactionValue>
              <TransactionValue>{transaction.created_at}</TransactionValue>
            </Transaction>
          ))
        }
      </TransactionsList>
    </Container>
  )
}
