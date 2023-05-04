
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Home from '../Pages/Home'
import SignupsForms from './SignupsForms'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<Admin/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignupsForms/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes