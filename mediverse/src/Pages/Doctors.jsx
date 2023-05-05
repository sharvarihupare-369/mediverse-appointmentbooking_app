import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Doctors = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [Error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchDoctorData = page => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/doctors?_page=${page}&_limit=12`)
      .then(res => {
        setData(res.data);
        let pages = res.headers['x-total-count'];
        setTotalPages(Math.ceil(pages / 12));
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDoctorData(page);
  }, [page]);

  return (
    <>
      <Box
        w="70%"
        m="auto"
        gap="40px"
        display={'grid'}
        gridTemplateColumns={'repeat(3,1fr)'}
        textAlign={'center'}
        p="10px"
      >
        {data.map((doctor, ind) => {
          console.log(doctor);
          return (
            <Box boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
              <Image width={'400px'} m="auto" src={doctor.image} />
              <Heading as="h5" size="sm">
                {doctor.name}
              </Heading>
              <Text>Specialist : {doctor.specialist}</Text>
              <Text>Exp : {doctor.experience}</Text>
              <Text></Text>
              <Button>Book Appointment</Button>
            </Box>
          );
        })}
      </Box>
      <Box m="5px 5px" alignItems={"center"} display={'flex'} justifyContent={'center'} ga="5px">
        <Button
          color={'white'}
          bg={'#222566'}
          _hover={{
            bg: '#3879E9',
          }}
          disabled={page == 1}
          onClick={() => setPage(page - 1)}
        >
          PREV
        </Button>
        {/* <Button>{page}</Button> */}
        {new Array(totalPages).fill(0).map((el, ind) => {
          return (
            <Button
               m="5px"
              _hover={{
                bg: '#3879E9',
              }}
              onClick={() => setPage(page + 1)}
            >
              {ind + 1}
            </Button>
          );
        })}
        <Button
          color={'white'}
          bg={'#222566'}
          _hover={{
            bg: '#3879E9',
          }}
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </Button>
      </Box>
    </>
  );
};

export default Doctors;
