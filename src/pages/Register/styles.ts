import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  background-color: var(--shape);
  border: 2px solid var(--blue);
  padding: 1.5rem;
  border-radius: .5rem;
  flex: 1;
  max-width: 320px  ;
  `;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: var(--white);
`;

export const Input = styled.input`
  min-width: 320px;
  border: 1px solid var(--blue);
  border-radius: .5rem;
  padding: 8px;
  font-size: 1rem;
  margin-top: .5rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  background-color: var(--blue);
  font-size: 1rem;
  margin-top: .5rem;
  text-align: center;
  padding: .5rem;
  color: var(--white);
  max-width: 5rem;
  border-radius: .5rem;
  border: 0;
`;

