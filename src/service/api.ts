import axios from 'axios'

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers:{
    Authorization: localStorage.getItem('BOX-MONEY@token') || ''
  }
})

api.interceptors.request.use(
  (config)=>{
    console.log({config})
    if(config.headers)
    return config
  },
  (err)=>{
    return Promise.reject(err);
  },
)
