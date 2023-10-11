
import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/AuthContextProvider'
import Login from '../Pages/Login'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {

  let authval = JSON.parse(localStorage.getItem('auth')) || false;
  return authval ? children : <Navigate to="/login" />
  
}

export default PrivateRoutes