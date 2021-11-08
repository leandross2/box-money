import React from 'react';
import { Header } from '../../components/Header';
import { BalanceArea } from '../../components/BalanceArea';
import { ActionsArea } from '../../components/ActionsArea';

import { Container,  } from './styles';

export const Dashboard = () => {

  return (
    <Container>
      <Header/>

      <ActionsArea />

      <BalanceArea />
    </Container>
  )
}
