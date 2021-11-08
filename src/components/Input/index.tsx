import React, { InputHTMLAttributes } from 'react';

import { Container,ErrorMessage } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  error?: string
  mask?: string
}
export const Input = ({error,  value, ...rest}: InputProps) => {

  return (
    <>
      <Container>
        <input {...rest} value={value}/>
      </Container>
      {error &&
        <ErrorMessage>{error}</ErrorMessage>}
    </>
  )
}
