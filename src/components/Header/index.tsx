import React from 'react';
import {BiUserCircle} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi';
import { useAuth } from '../../hooks/useAuth';
import { formatCurrency } from '../../util/formatCurrency';

import { Container, Logo, UserDetails, Name, Total,UserInfo, Avatar, ButtonLogout } from './styles';

export const Header: React.FC = () => {
  const {account, signOut} = useAuth()
  return (
    <Container>
      <Logo>
        Box-Money
      </Logo>

    <UserDetails>
      {
        account && <UserInfo>
          <Name>{account.name}</Name>
          <Total>{formatCurrency(account.total) }</Total>
        </UserInfo>
      }

      <Avatar>
        <BiUserCircle size={50}/>
      </Avatar>
      <ButtonLogout title="Sair" onClick={() => signOut()}>
        <FiLogOut size={25}/>
        Sair
      </ButtonLogout>
    </UserDetails>
  </Container>
  )
}
