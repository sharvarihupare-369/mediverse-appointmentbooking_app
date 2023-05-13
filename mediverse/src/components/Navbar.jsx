import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Image,
  HStack,
  Input,
  Avatar, AvatarBadge, AvatarGroup,
  VStack,
} from '@chakra-ui/react';
import logo1 from '../Assets/Mediverse (12).png';
import { Search2Icon  } from '@chakra-ui/icons';
import 'animate.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../Contexts/SearchContextProvider';
import { useContext, useEffect, useState } from 'react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { FaSearch, FaUser } from 'react-icons/fa';
import { AuthContext } from '../Contexts/AuthContextProvider';
// import {AiOutlineUser} from 'react-icons'

export default function WithSubnavigation() {
  const navigate = useNavigate();
  const [inputVal, setInputVal] = useState('');
  const [search, setSearch] = useState(false);
  const { data, setData, setStatus } = useContext(SearchContext);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [usernamesdata,setUsernamesdata] = useState([])
  const [usernames,setUsernames] = useState('')
  let authval = JSON.parse(localStorage.getItem('auth')) || false
  let userdatanames = JSON.parse(localStorage.getItem('username')) || ''

  console.log(userdatanames)
  let fullName = userdatanames.firstName + userdatanames.lastName
  
  const { login, logout, username, setUsername } =
    useContext(AuthContext);
  // const names = username;

  const fetchName = () => {
    axios.get(`https://doctordata.onrender.com/username`).then((res)=>setUsernamesdata(res.data)).catch((err)=>console.log(err))
  }

  useEffect(()=>{
    fetchName()
    usernamesdata.map((el)=>{
      setUsernames(el.firstName)
  })
  },[])

  const handleLogout = () => {
    localStorage.setItem('auth',JSON.stringify(false))
  }
  


  const handleSearch = val => {
    if (val) {
      setStatus(true);
    }

    axios
      .get(`https://doctordata.onrender.com/doctors?q=${val}&_page=${page}&_limit=12`)
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.log(err));
  };

  const handleDebounce = val => {
    if (id) clearTimeout(id);
    var id = setTimeout(() => {
      handleSearch(val);
    }, 1000);
  };



  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position={'fixed'}
      top="0"
      w="100%"
      zIndex={'overlay'}
      className="animate__animated animate__fadeInDown"
    >
      <Flex
        alignItems={'center'}
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
       
      >
        <Flex
       
          alignItems={'center'}
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          w="40%"
          alignItems={'center'}
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
        >
          <Image
            src={logo1}
            w={{
              base: '100px',
              sm: '100px',
              md: '100px',
              lg: '100px',
              xl: '100px',
              '2xl': '100px',
            }}
            objectFit={'cover'}
            borderRadius={'5px'}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
          />

          {/* </Text> */}

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex
          w="30%"
          // mr="300px"
          flex={{ base: 1 }}
          justify={{ base: 'start', md: 'start' }}
        >
          <Box

            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
            w="70%"
          >
            <Input
              placeholder="Search something here..."
              w="90%"
              borderRadius={'20px'}
              onChange={e => handleDebounce(e.target.value)}
            />
            <Box position={'relative'} right="40px" top="5px">
              {/* <FaSearch   /> */}
              <Search2Icon />
            </Box>
          </Box>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          alignItems={'center'}
        >
          <VStack>
            {/* <FaUser /> */}
            {/* <Text>{authval ? userdatanames.firstName : "User"}</Text> */}
            {
              authval ?  <Avatar name={userdatanames.firstName + " " + userdatanames.lastName} color={"white"} bg="#222566"  src='https://bit.ly/broken-link' /> :  
              <Avatar bg='#222566' />
            }
           
  
          </VStack>
      
      { 
        authval  ?   <Button
        onClick={handleLogout}
        as={'a'}
        fontSize={'sm'}
        fontWeight={400}
        variant={'link'}
        href={'/login'}
      >
      {"Logout"} </Button> : 
      
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'/login'}
          >
          {"Sign_in"}
          </Button>

      }
        
       
          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#222566'}
            href={'/signup'}
            _hover={{
              bg: '#3879E9',
            }}
          > 
            Sign Up
          </Button>

          <ColorModeSwitcher />
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blue.50', 'blue.50') }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box zIndex={'dropdown'}>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#3879E9' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'#3879E9'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Doctors',
    href: '/doctors',
    children: [
      {
        label: 'All',
        // subLabel: 'Find your dream design job',
        href: '/doctors',
      },
      {
        label: 'Cardiologist',
        // subLabel: 'Find your dream design job',
        href: '/cardiology',
      },
      {
        label: 'Neurologist',
        // subLabel: 'An exclusive list for contract work',
        href: '/neurology',
      },
      {
        label: 'Gynecologist',
        // subLabel: 'An exclusive list for contract work',
        href: '/gynecologist',
      },
      {
        label: 'Gastroenterology',
        // subLabel: 'An exclusive list for contract work',
        href: '/gastroenterology',
      },
      {
        label: 'Dermatologist',
        // subLabel: 'An exclusive list for contract work',
        href: '/dermatologist',
      },
      {
        label: 'Orthopedics',
        // subLabel: 'An exclusive list for contract work',
        href: '/orthopedics',
      },
      {
        label: 'General Medicine',
        // subLabel: 'An exclusive list for contract work',
        href: '/doctors',
      },
      {
        label: 'Pulmonologist',
        // subLabel: 'An exclusive list for contract work',
        href: '/pulmonologist',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'About Us',
    href: '/about',
  }
];
