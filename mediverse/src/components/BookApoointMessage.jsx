import { Box ,Heading,Text} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BookApoointMessage = () => {
  const navigate = useNavigate()

  setTimeout(()=>{
     navigate('/') 
  },5000)

  return (
    <Box textAlign={"center"}  mt="150px" color={"#222566"} lineHeight={"25px"} p="10px" mb="180px" >
        <Heading  as="h2" size="xl"><Text as="i">Thank You!</Text></Heading>
       <Heading  as="h2" size="xl"><Text as={"i"}>Your message has been Successfully sent.</Text></Heading>
       <Heading  mt="10px" as="h5" size="md"><Text as={"i"}>We will contact you very soon!</Text></Heading>
    </Box>
  )
}



export default BookApoointMessage