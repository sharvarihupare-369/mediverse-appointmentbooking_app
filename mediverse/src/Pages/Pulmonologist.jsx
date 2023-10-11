import React from 'react'

import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { SearchContext } from '../Contexts/SearchContextProvider';
import CardsDoc from '../components/CardsDoc';
import { Box , Image, Input, Heading, Text, Button, Grid } from '@chakra-ui/react'
import Buttons2 from '../components/Buttons2';
import Loader from '../components/Loader';
import Error from '../components/Errormsg';
const Pulmonologist = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const {
      setData,
      data,
      setStatus,
      status,
      loading,
      setLoading,
      error,
      setError,
    } = useContext(SearchContext);
  
    const fetchDoctorData = page => {
      setLoading(true);
      axios
        .get(`https://doctordata.onrender.com/pulmonologist?_page=${page}&_limit=6`)
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

    if (loading) {
      return (
        <Loader/>
      );
    }
  
    if(error){
      return <Error/>
    }

  return (
    <>
      <Grid
        gap="40px"
        w="70%"
        m="auto"
        mt="40px"
        mb="40px"
        // mt="100px"
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
      <Buttons2 page={page} setPage={setPage} totalPages={totalPages} />
    </>
  )
}

export default Pulmonologist