import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useToast,
 Text,
  useDisclosure ,  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { HStack, Input } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import BookModal from './BookModal';

const BookAppointForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState(null);
  const [message, setMessage] = useState('');
  const [stat, setStat] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const bookapoointement = () => {
    axios
      .post(`http://localhost:8080/bookingappoint`, {
        name,
        email,
        phonenumber,
        message,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handleSubmitAppoint = e => {
    e.preventDefault();
    if (!name || !phonenumber || !email) {
      toast({
        title: 'Booking Failed',
        description: 'All fields should be filled',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }else{
      return <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Thanks for submitting your application. Our team will get back to you
            soon.
          </AlertDescription>
        </Alert>;

    }
   
    // bookapoointement()

    // showBookModal()
    setTimeout(()=>{
      setName('');
      setMessage('');
      setPhonenumber('');
      setEmail('');
    },1000)
  
    // navigate('/bookingappoint')
  };

  // if (stat) {
  //   setTimeout(())
  //  return <Alert
  //     status="success"
  //     variant="subtle"
  //     flexDirection="column"
  //     alignItems="center"
  //     justifyContent="center"
  //     textAlign="center"
  //     height="200px"
  //   >
  //     <AlertIcon boxSize="40px" mr={0} />
  //     <AlertTitle mt={4} mb={1} fontSize="lg">
  //       Application submitted!
  //     </AlertTitle>
  //     <AlertDescription maxWidth="sm">
  //       Thanks for submitting your application. Our team will get back to you
  //       soon.
  //     </AlertDescription>
  //   </Alert>;
  // }

  return (
    <Container
     position={"relative"}
     top="-25px"
      borderRadius={'10px'}
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      maxW={750}
      p="50px"
    >
      <form onSubmit={handleSubmitAppoint}>
        <Heading color={'#222566'} textAlign={'center'} size="xl" as="h2">
          Book An Appointment
        </Heading>
        <Box mt="30px">
          <HStack>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              type="number"
              placeholder="PhoneNumber"
              value={phonenumber}
              onChange={e => setPhonenumber(e.target.value)}
            />
          </HStack>

          <HStack mt="20px">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Mesaage"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </HStack>
          <Flex justifyContent={'center'}>
            <Button
              
              type="submit"
              bg={'#222566'}
              color={'white'}
              _hover={{
                bg: '#3879E9',
              }}
              mt="15px"
              p="10px 30px"
            >
              Submit
            </Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thank You!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Heading as="h5" size="md">Your message has been Successfully sent.</Heading>
          <Text>We will contact you very soon!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          </Flex>
        </Box>
      </form>
    </Container>
  );
};

export default BookAppointForm;
