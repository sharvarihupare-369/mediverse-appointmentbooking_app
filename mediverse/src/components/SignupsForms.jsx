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
import { useState ,useContext} from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthContextProvider';
import 'animate.css';

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
  const toast = useToast()
  const navigate = useNavigate()
  const {isAuth,setIsAuth,login,logout,setUsername,username} = useContext(AuthContext)
 
  const {firstName,lastName,email,phonenumber,password,confirmPassword} = formdata

  const handleChange = e => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }; 

  const fetchPostData = (userData) => {
     const userDetail= axios.post(`https://doctordata.onrender.com/signup`,userData)
     userDetail.then((res)=>console.log(res)).catch((err)=>console.log(err ))

  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // fetchPostData();
     if(!firstName || !lastName || !phonenumber || !email || !password || !confirmPassword){
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
        title: 'Enter a valid phone number!',
        description: "Please fill the valid phone number!",
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
      return
     }
     
    
      if(password.length !== confirmPassword.length ){
        toast({
          title: 'Enter a valid password!',
          description: "Password should be of same length!",
          status: 'error',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
        return
     }

     if(password !== confirmPassword){
      toast({
        title: 'Enter a valid password!',
        description: "Password mismatched!",
        status: 'error',
        duration: 4000,
        isClosable: true,
        position: 'top',
      })
      return
   }
    //  if(password.toString().length != 12){
    //   toast({
    //     title: 'Enter a valid password!',
    //     description: "Password should be of minimum 6 characters!",
    //     status: 'warning',
    //     duration: 4000,
    //     isClosable: true,
    //     position: 'top',
    //   })
    //   return
    //  }

  

      let userData = {
        firstName,
        lastName,
        phonenumber,
        email,
        password,
        confirmPassword
      }
      let res = false;
       const data =  axios.get(`https://doctordata.onrender.com/signup`).then((res) => res.data)
       if(data.length > 0){
            data.forEach(el=>{
              if(el.email == userData.email || el.phonenumber == userData.phonenumber){
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
        setFormdata(initState)
        setTimeout(()=>{
          navigate('/login')
        },4000)
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
        // setUsername(userData.firstName)
        setFormdata(initState)
        setTimeout(()=>{
          navigate('/login')
        },4000)
        return
       }

       if(res){
        toast({
          title: 'User Already Registered!',
          description: "Please log in to continue.",
          status: 'warning',
          duration: 4000,
          isClosable: true,
          position: 'top',
        })
        return
       }

    }


  return (
    <>
    {/* <Container maxW={'750'}> */}
      <form onSubmit={handleSubmit}>
        <Flex
        className='animate__animated animate__jackInTheBox'
          mt={"70px"}
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}
        >
          <Stack spacing={8} mx={'auto'} maxW={{base:"md" , sm : "md" , md :"lg" , lg:"xl" , xl : "xl" , "2xl" :"lg"}} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} color={"#222566"} textAlign={'center'}>
                Sign up
              </Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}
              >
              <Stack spacing={4}>
                <Flex gap="10px" direction={{base:"column" , sm:"column" , md:"column" , lg :"row" , xl:"row" , "2xl" : "row"}}>
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
                </Flex>
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
                    Already a user? <Link color={'blue.400'} href="/login">Login</Link>
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
