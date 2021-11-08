import { FormEvent, useCallback, useState } from 'react';
import { createBrowserHistory} from 'history'
import { toast } from 'react-toastify';

import { Input } from '../../components/Input';

import { Container, Box,  Button, Label, Form } from './styles';
import { api } from '../../service/api';

export const Register = () => {
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const history = createBrowserHistory()

  const handleSubmit = useCallback(async (event: FormEvent)=>{
    try{
      event.preventDefault()
      if(!username){
        setError("Preencha o username")
        return
      }

      await api.post('/accounts', {
        name,
        username
      })

      window.location.pathname = '/'

    }catch(err){
      console.error(err)
      toast.error('Falha ao registrar')
    }

  },[username])

  return (
    <Container>
      <Box>
        <Form onSubmit={handleSubmit}>
        <Label htmlFor="input-name">Name:</Label>
        <Input
          error={error}
          id="input-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label htmlFor="input-name">Username:</Label>
        <Input
          error={error}
          id="input-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
        </Form>
      </Box>
    </Container>
  )
}
