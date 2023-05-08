import { Box, Grid, Heading, Text, Flex, HStack, Input, Checkbox, Button, Link } from '@chakra-ui/react';
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,

} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box background={'#222566'} color={'white'} p="40px" textAlign={{base:"center",sm : "center" , md:"start",lg:"start",xl:"start","2xl":"start"}} >
      <Flex justifyContent={"space-around"}  direction={ {base : "column", sm : "column" , md:"column" , lg : "row" , xl:"row" , "2xl" : "row"}} gap="20px" mt="5px">
        <Grid templateColumns={{base : 'repeat(1,1fr)' , sm : 'repeat(1,1fr)' , md:'repeat(2,1fr)',lg:'repeat(2,1fr)',xl:'repeat(4,1fr)',"2xl":'repeat(4,1fr)'}} gap="5px">
          <Box mt="10px" cursor={"pointer"} >
            <Heading as="h5" size="md">
              Who we are?
            </Heading>
            <Text>About Us</Text>
            <Text>Services</Text>
            <Text>Our Story</Text>
            <Text>Partner Program</Text>
            <Text>Partner Offers</Text>
          </Box>
          <Box mt="10px" cursor={"pointer"} >
            <Heading as="h5" size="md">
              Our Products
            </Heading>
            <Text>For You</Text>
            <Text>For Doctors</Text>
          </Box>
          <Box mt="10px" cursor={"pointer"} >
            <Heading as="h5" size="md">
              Others
            </Heading>
            <Text>Terms & Conditions</Text>
            <Text>Privacy Policy</Text>
              {/* <Box w="90%" m="auto" border="1px solid red"> */}
            <Flex  justifyContent={{base:"center",sm:"center",md:"start",lg:"start",xl:"start","2xl":"start"}} gap="7px" mt="5px" fontSize={'22px'}>

              <Link to="www.google.com"><FaLinkedin cursor={"pointer"} /></Link>
              <FaTwitter cursor={"pointer"} />
              <FaFacebook cursor={"pointer"} />
              <FaInstagram cursor={"pointer"}  />
              <FaYoutube cursor={"pointer"} />
            </Flex>
              {/* </Box> */}
              
          </Box>
          <Box  mt="10px" >
            <Heading as="h5" size="md">
              Contact Us
            </Heading>
            <Text>
              MediVerse Limited Kapoor
              <br/>
               Building, 42/44,4th
              Marine Street, 
               Near Metro Cinema, Dhobi Talao,
               Mumbai 4004342
            </Text>
            <Text cursor={"pointer"} >Email: mediverse@caregmail.com</Text>
          </Box>
        </Grid>
        <Box>
            <Heading>Talk to US</Heading>
            <Text>Know More about MEdiVerse</Text>
            <Input placeholder='Enter Your Name' type='text'mt="10px" />
            <Input placeholder='Enter Your Mobile Number' type='text' mt="10px" />
            <Checkbox defaultChecked mt="10px">I agree to receive updates on WhatsApp</Checkbox>
            <Box>
            <Button color={"#222566"} mt="10px">Connect With MEdiVerse</Button>
            </Box>
             <Box >
              <Text fontSize="10px" mr="100px" mt="40px">&copy; MEdiVerse 2023</Text>
  
              </Box>
        </Box>
        
      </Flex>
    </Box>
  );
};

export default Footer;
