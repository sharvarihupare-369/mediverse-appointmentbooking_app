
import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Home from '../Pages/Home'
import SignupsForms from './SignupsForms'
import Doctors from '../Pages/Doctors'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import Signup from '../Pages/Signup'
import Cardiology from '../Pages/Cardiology'
import Neurology from '../Pages/Neurology'
import PageNotFound from '../Pages/PageNotFound'
import Gynecologist from '../Pages/Gynecologist'
import Gastroenterology from '../Pages/Gastroenterology'
import Dermatologist from '../Pages/Dermatologist'
import Orthopedics from '../Pages/Orthopedics'


const AllRoutes = () => {

  
  return (
    <div>
      <Routes>
        <Route path='/admin' element={<Admin/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/signup' element={<SignupsForms/>} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/cardiology' element={<Cardiology/>} />
        <Route path='/neurology' element={<Neurology/>} />
        <Route path='/gynecologist' element={<Gynecologist/>} />
        <Route path='/gastroenterology' element={<Gastroenterology/>} />
        <Route path='/dermatologist' element={<Dermatologist/>} />
        <Route path='/orthopedics' element={<Orthopedics/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes