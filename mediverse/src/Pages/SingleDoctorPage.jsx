import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormLabel,
  Select,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from '@chakra-ui/react';
import validator from 'validator';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../Contexts/SearchContextProvider';
import CardsDoc from '../components/CardsDoc';
import Loader from '../components/Loader';
import Error from '../components/Errormsg';
import { Rating } from 'react-simple-star-rating';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const initState = {
  name: '',
  age: 0,
  phoneNum: 0,
  gender: '',
  date: '',
  time: '',
  address: '',
  city: '',
  state: '',
};

const SingleDoctorPage = () => {
  const { doctor_id } = useParams();
  // console.log(doctor_id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [data, setData] = useState({});
  const toast = useToast();
  const regex = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;

  const [bookingform, setBookingform] = useState(initState);

  const isError = bookingform === '';

  const { isOpen, onOpen, onClose } = useDisclosure();
  const fetchDoctorData = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/doctors/${doctor_id}`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
        // let pages = res.headers['x-total-count'];
        // setTotalPages(Math.ceil(pages / 12));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDoctorData(doctor_id);
  }, [doctor_id]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const { name, age, phoneNum, gender, date, time, address, city, state } =
    bookingform;

  const handleFormChange = e => {
   
    setBookingform({ ...bookingform, [e.target.name]: e.target.value });
  };
  // console.log(bookingform)

  const fetchPostBookingData = bookingform => {
    axios
      .post(`http://localhost:8080/patients`, bookingform)
      .then(res => console.log(res))
      .catch(er => console.log(er));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    // fetchPostBookingData(bookingform)
    if (
      !name ||
      !age ||
      !phoneNum ||
      !gender ||
      !date ||
      !time ||
      !address ||
      !state
    ) {
      toast({
        title: 'Booking Appointment Failed',
        description: 'All fields are required',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    if (phoneNum.toString().length !== 10) {
      toast({
        title: 'Correct details Required!',
        description: 'Please fill the valid phone number!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }
    if (age < 18) {
      toast({
        title: 'Correct details Required!',
        description: 'Age should be above 18!',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    if (validator.isDate(bookingform.date)) {
      alert('valid date')
    } else {
      toast({
        title: 'Correct details Required!',
        description: 'Date of Birth must be a valid date',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    setBookingform(initState);

  };



  return (
    <>
      <Flex justifyContent={'center'}>
        <Box
          textAlign={'center'}
          m="100px"
          p="50px"
          borderTopRightRadius={'30px'}
          borderBottomLeftRadius={'30px'}
          boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        >
          <Flex alignItems={'center'} justifyContent={'flex-end'}>
            <Text mr="3px">Rating : {data.rating}</Text>
            <FaStar color="green" display={'inline'} />
          </Flex>
          {/* <Rating/>  */}
          <Image w={'400px'} src={data.image} />
          <Box mt="10px" lineHeight={'30px'} textAlign={'center'} p="10px">
            <Heading as="h4" size="lg" color={'#222566'}>
              {data.name}
            </Heading>
            <Box>
              <Text fontSize={'20px'} as="b">
                Specialist : {data.specialist}
              </Text>
            </Box>
            <Box>
              <Text fontSize={'18px'} as="b">
                Experience : {data.experience}
              </Text>
            </Box>
            <Box>
              <Text as="b">Price_starts_from : {data.price}</Text>
            </Box>
            <Box>
              <Text as="b">Patients covered : {data.patients}+</Text>
            </Box>

            <Text textAlign={'center'}>
              Description : Lorem ipsum dolor sit amet consectetur
              <br /> adipisicing elit. Aspernatur voluptates blanditiis
              <br /> exercitationem
              <br /> quo quisquam similique cumque beatae hic. Quia!
            </Text>

            <Button
              onClick={onOpen}
              mt="10px"
              color={'white'}
              bg={'#222566'}
              _hover={{
                bg: '#3879E9',
              }}
            >
              Book Appointment Now
            </Button>
          </Box>

          <Modal
            borderRadius="10px"
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <ModalOverlay />

            <form onSubmit={handleFormSubmit}>
              <ModalContent>
                <ModalHeader bg={'#222566'} color={'white'}>
                  Enter The Details
                </ModalHeader>
                <ModalCloseButton color={'white'} />
                <ModalBody>
                  <Box>
                    <FormControl>
                      <FormLabel>Enter Name</FormLabel>
                      <Input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={bookingform.name}
                        onChange={handleFormChange}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormLabel>Enter Age</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter Your Age"
                      name="age"
                      value={bookingform.age}
                      onChange={handleFormChange}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <Input
                      type="number"
                      placeholder="Enter Your Phone Number"
                      name="phoneNum"
                      value={bookingform.phoneNum}
                      onChange={handleFormChange}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Select Gender</FormLabel>
                    <Select
                      value={bookingform.gender}
                      name="gender"
                      onChange={handleFormChange}
                    >
                      <option value={''}>Select The Gender</option>
                      <option value={'male'}>Male</option>
                      <option value={'female'}>Female</option>
                      <option value={'others'}>Others</option>
                    </Select>
                  </Box>

                  <Box>
                    <FormLabel>Please Select the Date</FormLabel>
                    <Input
                      type="date"
                      value={bookingform.date}
                      name="date"
                      onChange={handleFormChange}
                    />
                  </Box>
                  <Box>
                    <FormLabel>Select the Time</FormLabel>
                    <Input
                      type="time"
                      value={bookingform.time}
                      name="time"
                      onChange={handleFormChange}
                    />
                  </Box>

                  <Box>
                    <FormLabel>Address</FormLabel>
                    <Input
                      type="text"
                      value={bookingform.address}
                      name="address"
                      onChange={handleFormChange}
                    />
                  </Box>
                  {/* <Box>
                    <FormLabel>City</FormLabel>
                    <Input type="text" placeholder={"Enter City"} name="city"  value={bookingform.city} onChange={handleFormChange} />
                  </Box> */}
                  <Box>
                    <FormLabel>State</FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter State"
                      name="state"
                      value={bookingform.state}
                      onChange={handleFormChange}
                    />
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                  <Button ml="5px" type="submit" color={'white'}
          bg={'#222566'}
          _hover={{
            bg: '#3879E9',
          }}>Submit</Button>
                </ModalFooter>
              </ModalContent>
            </form>
          </Modal>
        </Box>
      </Flex>
    </>
  );
};

export default SingleDoctorPage;
