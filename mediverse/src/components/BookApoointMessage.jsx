import { Box ,Heading,Text} from '@chakra-ui/react'
import React from 'react'

const BookApoointMessage = () => {
  return (
    <Box textAlign={"center"} lineHeight={"25px"} p="10px" mb="180px" >
        <Heading  as="h2" size="xl"><Text as="i">Thank You!</Text></Heading>
       <Heading  as="h2" size="xl"><Text as={"i"}>Your message has been Successfully sent.</Text></Heading>
       <Heading  mt="10px" as="h5" size="md"><Text as={"i"}>We will contact you very soon!</Text></Heading>
    </Box>
  )
}

export default BookApoointMessage