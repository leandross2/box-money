import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid var(--gray-light);
  background-color: var(--shape);
  color: var(--white);
  display: flex;
  flex: 1;
  border-radius: .5rem;
  margin-top: .5rem;
  & + div{
    margin-top: .5rem;
  }
  input{
    border: 0 none;
    flex: 1;
    padding: 1rem;
    background-color: transparent;
    color: var(--white);
    font-size: 1rem;
    &::placeholder{
      color: var(--white);
    }
  }
`;

export const ErrorMessage = styled.p`
  color: var(--red)
`
