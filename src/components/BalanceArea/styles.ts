import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Headers = styled.header`
  /* background-color: var(--shape); */
  display: flex;
  text-align: center;
  padding: .5rem;
`;

export const Title = styled.p`
  flex: 1;
`;

export const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex:1;
`;

export const Transaction = styled.tr`
  background-color: var(--shape);
  border-radius: .5rem;
  overflow: hidden;
  display: flex;
  padding: .5rem;
  transition: .2s border;
  border: 2px solid transparent;
  width: 100%;
  & + tr{
    margin-top: 10px;
  }

  &:hover{
    border: 2px solid var(--green)
  }
`;

export const TransactionDescription = styled.div`
  padding: .5rem;
  text-align: center;
  flex:1;
`;

interface TransactionValueProps{
  type?: 'credit' | 'debit'
}

export const TransactionValue = styled.div<TransactionValueProps>`
  padding: .5rem;
  text-align: center;
  flex:1;
  font-weight: 600;
  color: var(--white);
  ${(props) => props.type ==='credit' && css`color: var(--green)`}
  ${(props) => props.type ==='debit' && css`color: var(--red)`}
`;
