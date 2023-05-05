import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import 'animate.css';
import imag1 from '../Assets/vectorImage2.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Form } from 'react-router-dom';
import SliderPro from '../components/SliderPro';
import BookAppointForm from '../components/BookAppointForm';

const Home = () => {
  return (
    <>
      <Box
        bgImage="url('https://img.freepik.com/free-photo/young-professional-doctor-woman-physician-with-stethoscope-holding-digital-tablet-smiling-cam_1258-127422.jpg?w=1380&t=st=1683121920~exp=1683122520~hmac=8191b5cca491733f4d7775b9a4d3c420f30e2c74a3d9c03f29202bb91ba61e53')"
        //   backgroundPosition=""
        backgroundRepeat="no-repeat"
        backgroundSize={{
          base: 'cover',
          sm: 'cover',
          md: 'cover',
          lg: 'cover',
          xl: 'cover',
          '2xl': 'cover',
        }}
        opacity={'0.8'}
      >
        <Container
          w="100%"
          letterSpacing={'2px'}
          lineHeight={'100px'}
          maxW="container.lg"
          h="600px"
          p="10px"
          className="animate__animated animate__fadeInLeftBig"
        >
          <Box p="10px" mt="100px" lineHeight={'200px'}>
            <Heading mb="10px" color={'#222566'} as="h1" size="2xl">
              Get the Right Care
            </Heading>

            <Heading mb="10px" color={'#222566'} as="h1" size="xl">
              At the Right Time!
            </Heading>
            <Box bg="#222566" h="5px" borderRadius={'2px'} w="22%" m="10px 0px">
              <Divider orientation="horizontal" />
            </Box>
            <Box>
              <Heading color={'#222566'} as="h3" size="md" fontWeight={'500'}>
                From Best Team of <br />{' '}
                <Heading as="h1" size="3xl">
                  Specialists
                </Heading>{' '}
                <br />
                At MEdiVerse{' '}
              </Heading>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box position={'relative'} bottom={'30px'}>
        <Box>
          <BookAppointForm />
        </Box>
      </Box>
      <Heading
          fontWeight={'500'}
          color={'#222566'}
          as="h1"
          size="xl"
          textAlign={'center'}
        >    Our Excellence Centers
        </Heading>
      <Flex m="60px"   justifyContent={"space-around"}>
        
      
        <Box w="200px" textAlign={'center'}>
          <Image
            borderRadius={'50%'}
            src="https://img.freepik.com/premium-vector/medical-stethoscope-with-human-heart-health-care-medicine_284092-2696.jpg?size=626&ext=jpg&ga=GA1.2.205266656.1682997817&semt=ais"
          />
          <Heading size="sm" as="h4">
            Cardiology
          </Heading>
        </Box>
        <Box w="200px" textAlign={'center'}>
          <Image
            borderRadius={'50%'}
            src="https://img.freepik.com/free-vector/human-nervous-system_53876-90443.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=ais"
          />
            <Heading mt='5px' size="sm" as="h4">
            Neurology
          </Heading>
        </Box>
        <Box w="220px" textAlign={'center'}>
          <Image
            borderRadius={'50%'}
            src="https://img.freepik.com/free-vector/human-internal-organ-with-stomach_1308-108170.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=ais"
          />
          <Heading mt='5px' size="sm" as="h4">
            GastronEnterology
          </Heading>
        </Box>
        <Box w="230px" textAlign={'center'}>
          <Image
            borderRadius={'50%'}
            src="https://img.freepik.com/free-vector/stethoscope-lungs-earth-globe_1308-126019.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=ais"
          />
          <Heading size="sm" as="h4">
            Pulmonology
          </Heading>
        </Box>
        <Box w="200px" textAlign={'center'}>
          <Image
            borderRadius={'50%'}
            src="https://img.freepik.com/free-vector/anatomy-human-pelvis-white-background_1308-92151.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=ais"
          />
          <Heading size="sm" as="h4">
            Orthopedics
          </Heading>
        </Box>

      </Flex>

      <Box bgGradient="linear(to-r, #3879E9, #222566)">
        {/* <Image w="100%" src='https://img.freepik.com/free-vector/hospital-medicine-infographic-with-characters-physicians-working-hospital-caring-patients-fighting-viruses_1284-54255.jpg?w=1380&t=st=1683130927~exp=1683131527~hmac=4dc6c753903d6f170c654569ed18c17c652a2ad8d6dd2473821e3d63c8044fb6' /> */}

        {/* <Container> */}
        <Box
          p="100px"
          className="animate__animated animate__fadeInLeftBig"
          textAlign={'center'}
          alignItems={'center'}
          color={'white'}
        >
          <Heading>
            Welcome to the smart way of digitally managing health
          </Heading>
        </Box>
        {/* </Container> */}
      </Box>
      <SliderPro />

      <Box w="100%">
        <Image
          className="animate__animated  animate__backInUp"
          w="100%"
          src={imag1}
        />
      </Box>
    </>
  );
};

export default Home;
