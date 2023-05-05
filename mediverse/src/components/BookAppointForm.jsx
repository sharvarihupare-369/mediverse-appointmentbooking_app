import React from 'react';
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';
import { HStack, Input } from '@chakra-ui/react';



const BookAppointForm = () => {
  return (
    <Container borderRadius={"10px"} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" maxW={750} p="50px">
      <Heading color={'#222566'} textAlign={'center'} size="xl" as="h2">
        Book An Appointment
      </Heading>
      <Box mt="30px">
        <HStack>
          <Input type="text" placeholder="Name" />
          <Input type="number" placeholder="PhoneNumber" />
        </HStack>

        <HStack mt="20px">
          <Input type="email" placeholder="Email" />
          <Input type="text" placeholder="Mesaage" />
        </HStack>
        <Flex justifyContent={"center"}>
          <Button
            
            type="submit"
            bg={'#222566'}
            color={'white'}
            _hover={{
              bg: '#3879E9',
            }}
            mt="10px"
            p="10px 30px"
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default BookAppointForm;
