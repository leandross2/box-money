import { FormEvent, useCallback, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import Modal from 'react-modal';

import { RadioBox, TransationTypeContainer } from '../PaymentModal/styles';

import { Container, ErrorMessage } from './styles';
import { TitleModal } from '../components/TitleModal';
import { Input } from '../../Input';
import { Button } from '../components/Button';
import { api } from '../../../service/api';
import { useMutation } from 'react-query';

import { queryCliente } from '../../../service/queryCliente';
import { useAuth } from '../../../hooks/useAuth';

interface TransactionModalProps{
  isOpen: boolean;
  onRequestClose: () => void
}
interface createTransactionsData{
  description: string
  type: string
  value: number
}
export const TransactionModal = ({isOpen, onRequestClose}: TransactionModalProps) => {
  const {account} = useAuth()
  const [description, setDescription] = useState('')
  const [type, setType] = useState<'credit' | 'debit'>('credit')
  const [value, setValue] = useState(0)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const createTransactions = useMutation(async (data:createTransactionsData)=>{
    const response = await api.post('/transactions', data)

    return response.data
  }, {
    onSuccess: () => {
      queryCliente.invalidateQueries('transactions')
      queryCliente.invalidateQueries('me')
    }
  })

  const handleCreateNewTransaction = useCallback(async (event: FormEvent)=>{
    event.preventDefault()
    if(description.trim() === '' || value <= 0 ){
      setIsError(true)
      return
    }

    if(account.total < value && type === 'debit'){
      setErrorMessage('saldo insuficiente para saque')
      return
    }
  await createTransactions.mutateAsync({
    description,
    type,
    value,
  })

    setDescription('')
    setType('credit')
    setValue(0)
    setIsError(false)
    setErrorMessage('')

    onRequestClose()
  }, [description, type, value])

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      type="button"
      onClick={onRequestClose}
      className="react-modal-close"
    >
      <RiCloseFill size={20} />
    </button>

    <Container onSubmit={handleCreateNewTransaction}>
      <TitleModal>Nova transação</TitleModal>
      {isError && <ErrorMessage>Preencha todos os campos</ErrorMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Input
        placeholder="Valor"
        type="number"
        value={value}
        onChange={(event) =>  setValue(Number(event.target.value))}
      />
      <Input
        placeholder="Descrição"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <TransationTypeContainer>
        <RadioBox
          type="button"
          isActive={type === 'credit'}
          activeColor="green"
          onClick={() => setType('credit')}
          >
          <GiReceiveMoney size={20}/>
          <span>Deposito</span>
        </RadioBox>

        <RadioBox
          type="button"
          isActive={type === 'debit'}
          activeColor="red"
          onClick={() => setType('debit')}
        >
          <GiPayMoney size={20}/>
          <span>Saque</span>
        </RadioBox>
      </TransationTypeContainer>

      <Button type="submit">
        Concluir
      </Button>
    </Container>
  </Modal>
  )
}
