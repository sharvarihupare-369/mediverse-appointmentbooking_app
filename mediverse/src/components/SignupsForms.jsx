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
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

// const initState = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   password: '',
//   confirmPassword: '',
// };

export default function SignupsForms() {
  const [showPassword, setShowPassword] = useState(false);
  // const [formdata, setFormdata] = useState(initState);
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmpassword,setConfirmpassword] = useState('')

  // console.log(formdata.firstName)
  // const userDetails = {
  //   firstName : firstName,
  //   lastName : lastName,
  //   email : email,
  //   password : password,
  //   confirmpassword : confirmpassword
  // }

  // const handleChange = e => {
  //   // let {name,type,value} = e.target
  //   // let names = name
  //   // let val = type==="number" ? Number(value) : value
  //   setFormdata({ ...formdata, [e.target.name]: e.target.value });
  // }; 

  const fetchPostData = (userDetails) => {
     const userDetail= axios.post(`http://localhost:3000/register`,userDetails)
     userDetail.then((res)=>console.log(res)).catch((err)=>console.log(err ))
    //  console.log(userDetail);
    //  .then((res)=>console.log(res)).catch((err)=>console.log(err))
  }


  const handleSubmit = e => {
    e.preventDefault();
    const userDetails = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      password : password,
      confirmpassword : confirmpassword
    }
    fetchPostData(userDetails);
  };


  return (
    <>
    <Container maxW={'750'}>
      <form onSubmit={handleSubmit}>
        <Flex
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
                    <FormControl isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        onChange={(e)=>setFirstName(e.target.value)}
                        name="firstName"
                        value={firstName}
                        type="text"
                        />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        onChange={(e)=>setLastName(e.target.value)}
                        name="lastName"
                        value={lastName}
                        type="text"
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    onChange={(e)=>setEmail(e.target.value)}
                    name="email"
                    type="email"
                    value={email}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
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
                <FormControl isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmpassword}
                      name="confirmPassword"
                      onChange={(e)=>setConfirmpassword(e.target.value)}
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
                    bg={'blue.400'}
                    color={'white'}
                    _hover={{
                      bg: 'blue.500',
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
    </Container>
   </>
  );
}
