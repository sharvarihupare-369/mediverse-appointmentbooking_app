import {
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import 'animate.css';
import imag1 from '../Assets/vectorImage2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Form } from 'react-router-dom';
import SliderPro from '../components/SliderPro';

const Home = () => {
  return (
    <>
     
      <Box
        bgImage="url('https://img.freepik.com/free-photo/young-professional-doctor-woman-physician-with-stethoscope-holding-digital-tablet-smiling-cam_1258-127422.jpg?w=1380&t=st=1683121920~exp=1683122520~hmac=8191b5cca491733f4d7775b9a4d3c420f30e2c74a3d9c03f29202bb91ba61e53')"
        //   backgroundPosition=""
        backgroundRepeat="no-repeat"
        backgroundSize={{base:"cover",sm:"cover",md:"cover",lg:"cover",xl:"cover","2xl":"cover"}}
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


      <Box bgGradient='linear(to-r, #3879E9, #222566)'>
        {/* <Image w="100%" src='https://img.freepik.com/free-vector/hospital-medicine-infographic-with-characters-physicians-working-hospital-caring-patients-fighting-viruses_1284-54255.jpg?w=1380&t=st=1683130927~exp=1683131527~hmac=4dc6c753903d6f170c654569ed18c17c652a2ad8d6dd2473821e3d63c8044fb6' /> */}

     {/* <Container> */}
        <Box p="100px"  className="animate__animated animate__fadeInLeftBig" textAlign={"center"} alignItems={"center"} color={"white"}>
            <Heading >Welcome to the smart way of digitally managing health</Heading>
            </Box>
     {/* </Container> */}
      </Box>
      <SliderPro/>

      <Box w="100%" >
        <Image className="animate__animated  animate__backInUp" w="100%" src={imag1} />
      </Box>
    </>
  );
};

export default Home;

