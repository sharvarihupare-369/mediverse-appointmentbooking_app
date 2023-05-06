import React from 'react'

import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../Contexts/SearchContextProvider';
import CardsDoc from '../components/CardsDoc';
import { Box , Image, Input, Heading, Text, Button, Grid } from '@chakra-ui/react'


const Dermatologist = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const {
      setData,
      data,
      setStatus,
      status,
      loading,
      setLoading,
      Error,
      setError,
    } = useContext(SearchContext);
  
    const fetchDoctorData = page => {
      setLoading(true);
      axios
        .get(`http://localhost:3000/dermatologist?_page=${page}&_limit=6`)
        .then(res => {
          setData(res.data);
          let pages = res.headers['x-total-count'];
          setTotalPages(Math.ceil(pages / 6));
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
      <Grid
        gap="40px"
        w="70%"
        m="auto"
        mt="40px"
        mb="40px"
        templateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(1,1fr)',
          md: 'repeat(2,1fr)',
          lg: 'repeat(2,1fr)',
          xl: 'repeat(3,1fr)',
          '2xl': 'repeat(3,1fr)',
        }}
        textAlign={'center'}
        p="10px"
      >
        {data.map((doctor, ind) => {
          return <CardsDoc doctor={doctor} />;
        })}
      </Grid>
      <Box
        m="40px 5px"
        alignItems={'center'}
        display={'flex'}
        justifyContent={'center'}
        ga="5px"
      >
        <Button
          color={'white'}
          bg={'#222566'}
          _hover={{
            bg: '#3879E9',
          }}
          isDisabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          PREV
        </Button>
        <Button>{page}</Button>

        <Button
          color={'white'}
          bg={'#222566'}
          _hover={{
            bg: '#3879E9',
          }}
          isDisabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </Button>
      </Box>
    </>
  )
}

export default Dermatologist