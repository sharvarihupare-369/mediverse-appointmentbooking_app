import React from 'react'
import  { createContext, useState } from 'react'


export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
  
  const [isAuth,setIsAuth] = useState(true)
  const [username,setUsername] = useState('')
  const [logindata,setLogindata] = useState(false)
  const login = () => {
    setIsAuth(true)
  }

  const logout = () => {
    setIsAuth(false)
  }

  return (
   <AuthContext.Provider value={{login,logout,isAuth,setIsAuth,setUsername,username,logindata,setLogindata}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider