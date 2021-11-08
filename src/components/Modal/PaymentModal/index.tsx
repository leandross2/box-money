import { FormEvent, useCallback, useEffect, useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import Modal from 'react-modal';

import { RadioBox, TransationTypeContainer } from '../PaymentModal/styles';

import { Container } from './styles';
import { TitleModal } from '../components/TitleModal';
import { Input } from '../../Input';
import { Button } from '../components/Button';
import { api } from '../../../service/api';
import { useMutation } from 'react-query';

import { queryCliente } from '../../../service/queryCliente';

interface PaymentModalProps{
  isOpen: boolean;
  onRequestClose: () => void
}
interface createPaymentData{
  description: string
  type: string
  value: number
}
export const PaymentModal = ({isOpen, onRequestClose}: PaymentModalProps) => {
  const [description, setDescription] = useState('')
  const [type, setType] = useState<'credit' | 'debit'>('credit')
  const [value, setValue] = useState(0)

  const createTransactions = useMutation(async (data:createPaymentData)=>{
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
    createTransactions.mutateAsync({
      description,
      type: 'debit',
      value,
    })

    setDescription('')
    setType('credit')
    setValue(0)

    onRequestClose()
  }, [description, type, value, createTransactions])

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
      <TitleModal>Novo Pagamento</TitleModal>

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
