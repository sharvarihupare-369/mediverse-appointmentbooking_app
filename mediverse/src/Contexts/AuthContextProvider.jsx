import React from 'react'
import  { createContext, useState } from 'react'


export const AuthContext = createContext()


const AuthContextProvider = ({children}) => {
  // const [isAuth,setIsAuth] = useState(false)
   
  const [username,setUsername] = useState('')

  // const login = () => {
  //   setIsAuth(true)
  // }

  // const logout = () => {
  //   setIsAuth(false)
  // }

  return (
   <AuthContext.Provider value={{setUsername,username}}>
    {children}
   </AuthContext.Provider>
  )
}

export default AuthContextProvider