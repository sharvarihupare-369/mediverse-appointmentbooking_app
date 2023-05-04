import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import { Form } from 'react-router-dom';
import SignupForm from './Forms/SignupForm';
import MainForm from './Forms/MainForm';
import './App.css'
import SignupsForms from './components/SignupsForms';

function App() {
  return (
    <>
   <Navbar2/>
   <Navbar/>
   <AllRoutes/>
   <Footer/> 
   {/* <Form/>
  {/* <MultiStepForm/> */}
   {/* <SignupForm/> */}
   {/* <MainForm/> */}
   {/* <SignupsForms/> */}

   
    </>
  );
}

export default App;
