
import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContextProvider'
import Login from '../Pages/Login'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

  // const {isAuth} = useContext(AuthContext)
  let authval = JSON.parse(localStorage.getItem('auth')) || false

  if(!authval){
    return <Login/>
  }
    return children;
}

export default PrivateRoutes