
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Home from '../Pages/Home'
import SignupsForms from './SignupsForms'
import Doctors from '../Pages/Doctors'
import Contact from '../Pages/Contact'
import About from '../Pages/About'


const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<Admin/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignupsForms/>} />
        <Route path='/doctors' element={<Doctors/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes