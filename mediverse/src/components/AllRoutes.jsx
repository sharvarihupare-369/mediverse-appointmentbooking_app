
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Home from '../Pages/Home'
import Form from '../components/Form'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<Admin/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/form' element={<Form/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes