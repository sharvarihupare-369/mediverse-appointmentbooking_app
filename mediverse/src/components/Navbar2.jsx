import React, { useContext, useEffect, useState } from 'react'
import {Flex , HStack, Image , Box , Text } from '@chakra-ui/react'
import logo1 from '../Assets/Mediverse (12).png'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Input } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import 'animate.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../Contexts/SearchContextProvider'

const Navbar2 = () => {

  const navigate = useNavigate()
  
  const [inputVal,setInputVal] = useState('')
  const {data,setData ,setStatus} = useContext(SearchContext)
  
 
  const handleSearch = (val) => {

    if(val){
        setStatus(true)
    }
    axios.get(`https://doctordata.onrender.com/doctors?q=${val}`).then((res)=>{
      console.log(res)
      setData(res.data)
     }).catch((err)=>console.log(err))
  
  }



  return (
    
    <Flex boxSizing='border-box' direction={['column','row']}  justifyContent={"space-between"}   alignItems={"center"} m="10px 10px" className='animate__animated animate__fadeInDown'>
       
    
        <Image w={{base:"100px",sm:"100px",md:"100px",lg:"150px",xl:"150px","2xl":"150px"}} objectFit={"cover"} borderRadius={"5px"} h="70px" src={logo1} alt="logo" />
        <HStack w="50%" mr="300px">
          <Box display={{base : "none", sm:"none", md:"none",lg:"flex" ,xl:"flex", "2xl" : "flex"}} w="60%">

        <Input placeholder='Search here something...' w="90%" borderRadius={"20px"}  onChange={(e)=>handleSearch(e.target.value)} />
        <Box position={"relative"} right="40px" top="5px">
        {/* <FaSearch   /> */}
        <Search2Icon/>
        </Box>
          </Box>
        </HStack>
        {/* <Box>
        <Text>Call Us Now-89758958596</Text>
        </Box> */}
  
    <Box>
        {/* <ColorModeSwitcher/> */}
    </Box>
    </Flex>
  )
}

export default Navbar2