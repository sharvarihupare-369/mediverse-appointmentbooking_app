import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input ,
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
  Container
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

export default function SignupsForms() {
  const [showPassword, setShowPassword] = useState(false);
  const [submitData,setSubmitData] = useState({})
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmpassword,setConfirmpassword] = useState('')
  const [age,setAge] = useState(0)
  

  const handleChange = (e) => {
    let {name,type,value} = e.target
    let names = name
    let val = type==="number" ? Number(value) : value
    setSubmitData({...submitData,[names] : val})

  }

  const fetchPostData = () => {
    axios.post(`http://localhost:3000/register`,submitData).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }

//   console.log(submitData)
  const handleSubmit = (e) => {
    e.preventDefault()
    fetchPostData()
  }
  return (
    <Container maxW={"750"}>
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
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input onChange={handleChange} name="firstName"  type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input onChange={handleChange} name="lastName" type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleChange} name="email" type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input  type={showPassword ? 'text' : 'password'} name="password" />

                <InputRightElement h={'full'} >
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
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input  type={showPassword ? 'text' : 'password'} name="confirmPassword" />

                <InputRightElement h={'full'} >
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
           
            <Box mt="10px">
              <FormLabel>Age</FormLabel>
              <Input onChange={handleChange}
                
                type="number"
                placeholder="Enter age"
                name="age"
                
                />
            </Box>
            <Box mt="10px">
              <FormLabel>Mobile Number</FormLabel>
              <Input onChange={handleChange}
                type="number"
                name="mobileNum"
                placeholder="Enter Mobile Number"
              />
            </Box>
            <Box mt="10px">
              <FormLabel>Gender</FormLabel>
              <Select onChange={handleChange} name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </Select>
            </Box>
            <Box mt="10px">
       <FormLabel>Address</FormLabel>
        <Input onChange={handleChange}
          type="text"
          name='address1'
          placeholder="555 Wallby Bay"
          pattern="([A-Z])[\w+,]{1,}" 
          />
      </Box>
      <Box mt="10px">
    
      <Input onChange={handleChange}
          type="text"
          name='city'
          placeholder='Enter City'
          pattern="([A-Z])[\w+,]{1,}"
          />
      </Box>
      <Box mt="10px">
        <FormLabel>State</FormLabel>
        <Input onChange={handleChange}
          type="text"
          name='state'
          placeholder="Enter your state"
          pattern="([A-Z])[\w+,]{1,}"
          
          />
        </Box>
        <Box mt="10px">
        <FormLabel>Country</FormLabel>
        <Input onChange={handleChange}
          type="text"
          name='country'
          placeholder='Country'
          pattern="([A-Z])[\w+,]{1,}"
          
          />
        </Box>
            <Stack spacing={10} pt={2}>
              <Button
               type='submit'
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
  );
}
