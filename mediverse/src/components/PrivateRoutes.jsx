
import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContextProvider'
import Login from '../Pages/Login'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

  const {isAuth} = useContext(AuthContext)

  if(!isAuth){
    return <Login/>
  }
    return children;
}

export default PrivateRoutes