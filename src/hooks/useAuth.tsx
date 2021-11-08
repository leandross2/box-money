import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { api } from "../service/api";
import { toast } from 'react-toastify';
import { useNavigate, useLocation } from "react-router";
import { useQuery } from "react-query";

interface Account{
  id:string
  name:string
  username:string
  total: number
}

interface AuthContextData{
  signIn: (usermame: string) => void
  account: Account
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface ModalProviderProps{
  children: ReactNode,
}

export const AuthProvider = ({children}: ModalProviderProps)=>{
  const location = useLocation()

  const [account, setAccount] = useState<Account>({} as Account)
  const {data, isError} = useQuery('me',async ()=>{
    if(location.pathname !== '/register' &&
    location.pathname !== '/'){
      const response = await api.get('/accounts/me')

      return response.data
    }
  },  {
    staleTime:  60 * 1000 //1min
  })
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem('BOX-MONEY@token')

  },[])
  useEffect(()=>{
    if(location.pathname === '/register' || location.pathname === '/') return

    const token = localStorage.getItem('BOX-MONEY@token')
    console.log(token)
    if(token){
      const getData = async ()=>{
        try{
          api.defaults.headers.common.Authorization = token
          console.log(data)
          setAccount(data)
        }catch(err){
          navigate('/')
        }
      }
      getData()
    }else{
      navigate('/')
    }
  },[data, account])

  const signIn = useCallback(async (username)=>{
    try{
      const response = await api.post('/sessions', {username})
      const {token, account: accountData} = response.data

        setAccount(accountData)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      localStorage.setItem('BOX-MONEY@token', `Bearer ${token}`)

      navigate('/dashboard')
    }catch(err){
      console.log(err)
      toast.error('Username invalido')
    }
  },[navigate])

  const signOut = useCallback(()=>{
    localStorage.removeItem('BOX-MONEY@token')
console.log('veio')
    navigate('/')
  },[])

  return (
    <AuthContext.Provider value={{signIn, account, signOut}}>
      {
        isError ? <p>500</p> : children
      }
    </AuthContext.Provider>
  )
}

export const useAuth = ()=>{
  const context = useContext(AuthContext)

  return context
}
