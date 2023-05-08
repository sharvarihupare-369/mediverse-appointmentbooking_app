import React from 'react'
import {
    Box,
    Image,
    Input,
    Heading,
    Text,
    Button,
    Grid,
    Spinner,
    Flex,
  } from '@chakra-ui/react';
  import Buttons from '../components/Buttons';

const CardsDoc = ({doctor}) => {
  return (
    <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" p="10px"  borderTopRightRadius={"12px"} borderTopLeftRadius={"12px"}>
      {/* <Text>Rating:{doctor.image}</Text> */}
    <Image width={'400px'} m="auto" src={doctor.image} />
    <Box mt="10px" lineHeight={"30px"}>

    <Heading as="h5" size="sm">
      {doctor.name}
    </Heading>
    <Text>Specialist : {doctor.specialist}</Text>
    <Text>Experience : {doctor.experience}</Text>
    
    </Box>
   <Buttons id={doctor.id}/>
  </Box>
  )
}

export default CardsDoc