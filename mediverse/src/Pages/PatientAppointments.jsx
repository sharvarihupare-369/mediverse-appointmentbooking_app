import {
  HStack,
  Flex,
  Box,
  Image,
  Heading,
  VStack,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Grid
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState, Text } from 'react';
import { SearchContext } from '../Contexts/SearchContextProvider';
import Loader from '../components/Loader';
import Error from '../components/Errormsg';
import { FaTimes } from 'react-icons/fa';
import img1 from "../Assets/About (1).png" 
import img2 from "../Assets/About (2).png" 

const PatientAppointments = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [cancel, setCancel] = useState(false);
  const [delete1,setDelete1] = useState(false) 

    // const { bookingformPatient } = useContext(SearchContext);

  const [users, setUsers] = useState([]);
  const [deletedUser,setDeletedUser] = useState(Array(users.length).fill(false))
  //   const [patient,setPatient] = useState({})
  const {
    loading,
    error,
    setLoading,
    setError,
    doctorname,
    setDoctorname,
    bookingformPatient,
  } = useContext(SearchContext);

  const getPatients = () => {
    setLoading(true);
    axios
      .get(`https://doctordata.onrender.com/patients`)
      .then(res => {
        console.log(res);
        setUsers(res.data);
        // setPatient(res.data)
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(false);
      });
  };

  const handleDelete = id => {
    axios
      .delete(`https://doctordata.onrender.com/patients/${id}`)
      .then(res => {
        setDelete1(true)
        setCancel(true);
        getPatients();

        // console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  console.log(users);

  useEffect(() => {
    getPatients();
  }, []);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Box mt="100px" p="30px" >
      <Heading color={'#222566'} ml={'20px'}>
        Your Appointments
      </Heading>
      <Flex  mt="20px" justifyContent={"space-between"} >
        <Box >
          {users.map((user,ind) => {  
            {/* console.log(user.id) */}
            return (
              <HStack mt="40px" m="30px" p="10px" boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                <Image
                  borderRadius="50%"
                  w="120px"
                  src="https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=sph"
                />
                <Flex flexDirection={{base:"column",sm:"column",md:"column" , lg:"row" , xl:"row" , "2xl" : "row"}} justifyContent={{base:"center" , sm:"center" , md :"center" , lg : "flex-start" , xl : "flex-start" , "2xl" : "flex-start" }}>
                 
                  <Box>
                  <Heading as="h4" size="md" ml="20px">
                    Name: {user.name}
                  </Heading>
                    <HStack>
                      <Box ml="22px">Age : {user.age}</Box>
                    </HStack>
                    {/* <Box ml="22px">doctorName : {user.doctorname}</Box> */}
                    <Box ml="22px">Gender : {user.gender}</Box>
                    <Box ml="22px">Date : {user.date}</Box>
                    <Box ml="22px">Time : {user.time}</Box>
                    <Box ml="22px">
                      Address : {user.address} {user.state}
                    </Box>
                  </Box>
                </Flex>
                <Box>
                  <Button onClick={onOpen}  color={'white'}
                bg={'#222566'}
                _hover={{
                  bg: '#3879E9',
                }}>Cancel</Button>
                </Box>
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}

                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader  fontSize="lg" fontWeight="bold">
                      Confirmation
                      </AlertDialogHeader>

                      <AlertDialogBody>
                      Are you sure you want to cancel appointment?
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => handleDelete(user.id)}
                          ml={3}
                        >
                          Delete
                        </Button>
                        
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>
              </HStack>
            );
          })}
        </Box>
        <Box>
          <Image src={img2} />
        </Box>
      </Flex>
      
    </Box>
  );
};

export default PatientAppointments;
