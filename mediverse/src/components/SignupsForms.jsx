import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  Container,
  useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

const initState = {
  firstName: '',
  lastName: '',
  phonenumber : null,
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignupsForms() {
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState(initState);
  // const [firstName,setFirstName] = useState('')
  // const [lastName,setLastName] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const [confirmpassword,setConfirmpassword] = useState('')
  const toast = useToast()
 
 
  const {firstName,lastName,email,phonenumber,password,confirmPassword} = formdata

  const handleChange = e => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }; 

  const fetchPostData = (userData) => {
     const userDetail= axios.post(`http://localhost:3000/signup`,userData)
     userDetail.then((res)=>console.log(res)).catch((err)=>console.log(err ))

  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    // fetchPostData();
     if(!firstName || !lastName || !phonenumber || !email || !password){
      toast({
        title: 'Registration Failed',
        description: "All fields are required",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
      return
     }

     if(phonenumber.toString().length !== 10){
      toast({
        title: 'Correct details Required!',
        description: "Please fill the valid phone number!",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
      return
     }
     
    //  if(`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`){
      if(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,20})$`.test(password)){
        
     }else{
      toast({
        title: 'Correct details Required!',
        description: "Password should be 8-20 characters and at least one number and one special character!",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
      return
     }

     if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

    } else {
      toast({
        title: 'Correct details Required!',
        description: "Please fill the valid Email!",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
      return
      };

  


      let userData = {
        firstName,
        lastName,
        email,
        password,
        phonenumber
      }
      let res = false;
       const data = await axios.get(`http://localhost:8080/signup`).then((res) => res.data)
       if(data.length > 0){
            data.forEach(el=>{
              if(el.email == userData.email){
                res = true
              }
            })
       }else{
        fetchPostData(userData)
        toast({
          title: 'User Registered Successfully',
          description: "Please log in to continue.",
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
        return
       }
       if(!res){
        fetchPostData(userData)
        toast({
          title: 'User Registered Successfully',
          description: "Please log in to continue.",
          status: 'success',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
        return
       }


      //  (check &&   toast({
      //   title: 'User Already Registered',
      //   description: "Please log in to continue.",
      //   status: 'error',
      //   duration: 4000,
      //   isClosable: true,
      //   position: 'top',
      // })

      // return
    }

  


  return (
    <>
    {/* <Container maxW={'750'}> */}
      <form onSubmit={handleSubmit}>
        <Flex
          mt={"7    0px"}
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Sign up
              </Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool features ✌️
              </Text>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}
              >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl >
                      <FormLabel>First Name</FormLabel>
                      <Input
                        onChange={handleChange}
                        name="firstName"
                        value={formdata.firstName}
                        type="text"
                        />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        onChange={handleChange}
                        name="lastName"
                        value={formdata.lastName}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl >
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    onChange={handleChange}
                    name="phonenumber"
                    type="number"
                    value={formdata.phonenumber}
                  />
                </FormControl>
                <FormControl >
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    value={formdata.email}
                  />
                </FormControl>
                <FormControl >
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formdata.password}
                      onChange={handleChange}
                    />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword(showPassword => !showPassword)
                        }
                        >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl >
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={formdata.confirmPassword}
                      name="confirmPassword"
                      onChange={handleChange}
                      />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword(showPassword => !showPassword)
                        }
                        >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    type="submit"
                    loadingText="Submitting"
                    size="lg"
                    color={'white'}
                    bg={'#222566'}
                    _hover={{
                      bg: '#3879E9',
                    }}
                    >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link color={'blue.400'}>Login</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </form>
    {/* </Container> */}
   </>
  );
}
