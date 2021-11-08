import { createContext, Dispatch, ReactNode, useCallback, useContext, useState } from "react";
import { PaymentModal } from "../components/Modal/PaymentModal";
import { TransactionModal } from "../components/Modal/TransactionModal";

type ModalNames = 'transaction' | 'payment' |false

interface ModalContextData{
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
  name: ModalNames
  setName: Dispatch<React.SetStateAction<ModalNames>>
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData)

interface ModalProviderProps{
  children: ReactNode,
}

export const ModalProvider = ({children}: ModalProviderProps)=>{
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState<ModalNames>(false)

  const handleCloseModal = useCallback(()=>{
    setName(false)
  },[])
  return (
    <ModalContext.Provider value={{isOpen, setIsOpen, name, setName}}>
      {children}
      <TransactionModal isOpen={name === 'transaction'} onRequestClose={handleCloseModal}/>
      <PaymentModal isOpen={name === 'payment'} onRequestClose={handleCloseModal}/>
    </ModalContext.Provider>
  )
}

export const useModal = ()=>{
  const context = useContext(ModalContext)

  return context
}
