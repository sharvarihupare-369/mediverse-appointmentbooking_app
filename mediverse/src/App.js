import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';
import Navbar2 from './components/Navbar2';
import Footer from './components/Footer';
import './App.css'
import SignupsForms from './components/SignupsForms';
import BookAppointForm from './components/BookAppointForm';
import BookApoointMessage from './components/BookApoointMessage';
import './App.css'
import {Box} from '@chakra-ui/react'

function App() {
  return (
    <>
    <Box className="App">

   {/* <Navbar2/> */}
   <Navbar/>
   <AllRoutes/>
   <Footer/> 
    </Box>
  
  
    </>
  );
}

export default App;
