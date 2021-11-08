import { FormEvent, useCallback, useState } from 'react';
import { createBrowserHistory} from 'history'
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/useAuth';

import { Container, Box,  Button, Label, Form, ButtonRegister } from './styles';

export const SignIn = () => {
  const [username, setUsername] = useState('')
  const [error, setError] = useState('')
  const history = createBrowserHistory()

  const {signIn} = useAuth()

  const handleSubmit = useCallback(async (event: FormEvent)=>{
    try{
      event.preventDefault()
      if(!username){
        setError("Preencha o username")
        return
      }

      signIn(username)

      history.push('/dashboard')

    }catch(err){
      console.error(err)
      setError('Username inválido')
    }

  },[username])

  return (
    <Container>
      <Box>
        <Form onSubmit={handleSubmit}>
        <Label htmlFor="input-username">Username:</Label>
        <Input
          error={error}
          id="input-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">Entrar</Button>

        <ButtonRegister to="/register">
          Criar Conta
        </ButtonRegister>
        </Form>
      </Box>
    </Container>
  )
}
