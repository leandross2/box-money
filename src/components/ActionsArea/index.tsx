import React, { useCallback } from 'react';
import { useModal } from '../../hooks/useModal';

import { Container, Button } from './styled';

export const ActionsArea: React.FC = () => {
  const { setName } =useModal()

  const handleOpenDeposityModal =useCallback(()=>{
    setName('transaction')
  },[])

  return (
    <Container>
      <Button onClick={handleOpenDeposityModal}>Transações</Button>
    </Container>
  )
}
