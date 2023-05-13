import React, { useContext, useEffect } from 'react'
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
import { AuthContext } from '../Contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
import { SearchContext } from '../Contexts/SearchContextProvider';
import Loader from '../components/Loader';
import Error from '../components/Errormsg';

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const [res,setRes] = useState([])
  const toast = useToast()
  const {loading,setLoading,error,setError} = useContext(SearchContext)
  const navigate = useNavigate()

  // const getLoginData = () => {
    
  // }



  // useEffect(()=>{
  //   getLoginData()
  // },[])

  // if(loading){
  //    <Loader/>
  // }

  // if(error) {
  //    <Error/>
  // }

  // const getname = (userData) => {
  //   axios.post(`http://localhost:8080/username`,userData).then(res=>console.log(res.data)).catch((err) => console.log(err)) 
  // }

  // console.log(res)

  const handleSubmit = async(e) => {

    e.preventDefault()

     const logindata = await axios.get(`https://doctordata.onrender.com/signup`).then((res)=> res.data )
     console.log(logindata)

     if(!email || !password ){
      toast({
        title: 'Login Failed',
        description: "All fields are required",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
      return
     }
     

  const userData = logindata.find((user)=>user.email === email)

  if(userData){
    if(userData.password  == password){

      toast({
        title: `${userData.email} Logged in Successfully`,
        // description: "",
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
 
      localStorage.setItem('auth',JSON.stringify(true))
      localStorage.setItem('username',JSON.stringify(userData))
      setEmail("")
      setPassword("")
      setTimeout(()=>{
          navigate('/')
      },4000)
      return 
    
      // setIsAuth(false) 
     
    }else{
      toast({
        title: 'Password mismatched',
        description: "Please enter correct password",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
     
      localStorage.setItem('auth',JSON.stringify(false))
      localStorage.setItem('username',JSON.stringify(""))
      return
    }
  }else{
    toast({
      title: 'Wrong Credentials',
      description: "Make sure you are registered",
      status: 'error',
      duration: 4000,
      isClosable: true,
      position: 'top',
    })
    // setIsAuth(false) 
    localStorage.setItem('auth',JSON.stringify(false))
    localStorage.setItem('username',JSON.stringify(""))
    return
  }
   
  }

  return (
    <form onSubmit={handleSubmit} >
    <Flex
     className='animate__animated animate__jackInTheBox'
      mt={"40px"}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack w={{base:"90%" , sm : "90%" , md:"80%" , lg:"70%", xl :"70%" , "2xl" : "70%"}} spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} color={"#222566"}>
           Login
          </Heading>
         
        </Stack>
        <Box
        
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          >
          <Stack spacing={4}>
           
            <FormControl >
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
                type="email"
                value={email}
              />
            </FormControl>
            <FormControl >
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
           
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                loadingText="Submitting"
                size="md"
                color={'white'}
                bg={'#222566'}
                _hover={{
                  bg: '#3879E9',
                }}
                >
               Login
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Not registered? <Link color={'blue.400'} href="/signup">Signup</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  </form>
  )
}

export default Login