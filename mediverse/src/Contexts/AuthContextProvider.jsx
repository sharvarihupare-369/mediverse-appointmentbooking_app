import React from 'react'
import  { createContext, useState } from 'react'
import axios from 'axios'


export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
  // const [isAuth,setIsAuth] = useState(false)
   
  const [username,setUsername] = useState('')
  const [price,setPrice] = useState(0)

  const fetchPrice = (id) => {
    axios.get(`https://doctordata.onrender.com/doctors/${id}`).then((res)=>{
         setPrice(res.data.price)
         console.log(res.data)
    }).catch((err)=>console.log(err))
  }



  // const login = () => {
  //   setIsAuth(true)
  // }

  // const logout = () => {
  //   setIsAuth(false)
  // }

  return (
   <AuthContext.Provider value={{setUsername,username,fetchPrice,price}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider