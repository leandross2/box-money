import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0 1rem;
`;

export const Button = styled.button`
  padding: .5rem;
  border: 0;
  background-color: var(--green);
  border-radius: 6px;
  font-size: 1rem;
  & + button{
    margin-left: .5rem;
  }
`;
