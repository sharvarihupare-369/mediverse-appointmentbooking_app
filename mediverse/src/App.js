import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import './App.css'
import SignupsForms from './components/SignupsForms';

function App() {
  return (
    <>
   <Navbar2/>
   <Navbar/>
   <AllRoutes/>
   <Footer/> 
  
    </>
  );
}

export default App;
