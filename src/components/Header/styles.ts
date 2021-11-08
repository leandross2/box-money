import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const Logo = styled.div`
  font-size: 3rem;
  color: var(--white);
  font-weight: 600;
  &:after{
    content: '.';
    color: var(--green)
  }
`;

export const UserDetails = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
`;

export const UserInfo = styled.div`

`;

export const Name = styled.p`
  font-size: 1rem;
`;

export const Total = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Avatar = styled.p`
  margin-left: .5rem;
`;

export const ButtonLogout = styled.button`
  background-color: transparent;
  border: 0;
  color: var(--white);
  margin-left: 1rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  svg{
    margin-right: .5rem;
  }
`;
