import React from 'react'
import {Flex , HStack, Image , Box , Text } from '@chakra-ui/react'
import logo1 from '../Assets/Mediverse (12).png'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Input } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import 'animate.css';

const Navbar2 = () => {
  return (
    
    <Flex boxSizing='border-box' direction={['column','row']}  justifyContent={"space-between"}   alignItems={"center"} m="10px 10px" className='animate__animated animate__fadeInDown'>
       
    
        <Image w={{base:"100px",sm:"100px",md:"100px",lg:"150px",xl:"150px","2xl":"150px"}} objectFit={"cover"} borderRadius={"5px"} h="70px" src={logo1} alt="logo" />
        <HStack w="50%" mr="300px">
          <Box display={{base : "none", sm:"none", md:"none",lg:"flex" ,xl:"flex", "2xl" : "flex"}} w="60%">

        <Input  placeholder='Search here something...' w="90%" borderRadius={"20px"} />
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
        <ColorModeSwitcher/>
    </Box>
    </Flex>
  )
}

export default Navbar2