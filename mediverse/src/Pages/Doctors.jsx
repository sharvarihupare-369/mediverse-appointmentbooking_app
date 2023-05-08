import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Popover,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Select,
  VStack,
  FormLabel,
  Grid,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../Contexts/SearchContextProvider';
import CardsDoc from '../components/CardsDoc';
import Loader from '../components/Loader';
import Error from '../components/Errormsg';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const getcurrentPage = pageNumber => {
  pageNumber = Number(pageNumber);
  if (!pageNumber) {
    pageNumber = 1;
  }
  // if(typeof pageNumber !== 'Number'){
  // }
  return pageNumber;
};

const Doctors = () => {
  const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  // const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [orderBy, setOrderBy] = useState('');
  const [orderByRating, setOrderByRating] = useState('');
  const [filterBy, setFilterBy] = useState('');
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(getcurrentPage(searchParams.get('page')));
  const sortBy = 'experience';
  const { data, setData } = useContext(SearchContext);

  const getapis = (url, orderBy, orderByRating, filterBy) => {
    if (orderBy) {
      url = `${url}&_sort=price&_order=${orderBy}`;
    } else if (orderByRating) {
      url = `${url}&_sort=rating&_order=${orderByRating}`;
    } else if (filterBy) {
      url = `${url}&category=${filterBy}`;
    }
    return url;
  };

  const fetchDoctorData = (page, orderBy, orderByRating, filterBy) => {
    let api = getapis(
      `http://localhost:8080/doctors?_page=${page}&_limit=12`,
      orderBy,
      orderByRating,
      filterBy
    );
    setLoading(true);
    axios
      .get(api)
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

  const handleClick = id => {
    navigate(`/doctors/${id}`);
  };

  useEffect(() => {
    fetchDoctorData(page, orderBy, orderByRating, filterBy);
  }, [page, orderBy, orderByRating, filterBy]);

  useEffect(() => {
    setSearchParams({ page });
  }, [page]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  const handlePageChange = val => {
    const updatePage = page + val;
    setPage(updatePage);
  };

  return (
    <>
      {/* <Flex justifyContent={"space-between"}> */}
      {/* <Flex ml="50px" direction={{base:"column",sm:"coulmn" , md:"column" ,lg:"column", xl:"column" , "2xl" : "column"}}> */}
      <Grid
        w="70%"
        m="auto"
        gap="40px"
        mt="90px"
        templateColumns={{
          base: 'repeat(1,1fr)',
          sm: 'repeat(1,1fr)',
          md: 'repeat(3,1fr)',
          lg: 'repeat(3,1fr)',
          xl: 'repeat(3,1fr)',
          '2xl': 'repeat(3,1fr)',
        }}
      >
        <Box
          mt="30px"
          w={{
            base: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
            '2xl': '100%',
          }}
        >
          <FormLabel>Sort By Price</FormLabel>
          <Select onChange={e => setOrderBy(e.target.value)}>
            <option value={''}>Select By Price</option>
            <option value={'asc'}>Ascending</option>
            <option value={'desc'}>Descending</option>
          </Select>
        </Box>
        <Box mt="30px">
          <FormLabel>Sort By Rating</FormLabel>
          <Select onChange={e => setOrderByRating(e.target.value)}>
            <option value={''}>Select By Rating</option>
            <option value={'asc'}>Ascending</option>
            <option value={'desc'}>Descending</option>
          </Select>
        </Box>
        <Box mt="30px">
          <FormLabel>Filter by Category:</FormLabel>
          <Select
            className="filter-by-category"
            value={filterBy}
            onChange={e => setFilterBy(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
            <option value="Pulmonologist">Pulmonologist</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="GeneralMedicine">General Medicine</option>
          </Select>
        </Box>
      </Grid>
      {/* </Flex>  */}
      <Box>
        <Box
          w="70%"
          m="auto"
          gap="40px"
          display={'grid'}
          gridTemplateColumns={{
            base: 'repeat(1,1fr)',
            sm: 'repeat(1,1fr)',
            md: 'repeat(2,1fr)',
            lg: 'repeat(2,1fr)',
            xl: 'repeat(3,1fr)',
            '2xl': 'repeat(3,1fr)',
          }}
          textAlign={'center'}
          p="10px"
          mt="30px"
        >
          {data.length == 0 ? (
            // <Heading>Data Not Found</Heading>
            <Flex justifyContent={'center'}>
              <Alert status="error">
                <AlertIcon />
                <AlertTitle> No data Found!</AlertTitle>
              </Alert>
            </Flex>
          ) : (
            data.map((doctor, ind) => {
              console.log(doctor);
              return (
                <Box
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  p="10px"
                  borderTopRightRadius={'12px'}
                  borderTopLeftRadius={'12px'}
                >
                  <Image width={'400px'} m="auto" src={doctor.image} />
                  <Box mt="10px" lineHeight={'30px'}>
                    <Heading as="h5" size="sm">
                      {doctor.name}
                    </Heading>
                    <Text>Specialist : {doctor.specialist}</Text>
                    <Text>Experience : {doctor.experience}</Text>
                    <Flex
                      justifyContent={'center'}
                      gap="3px"
                      alignItems={'center'}
                    >
                      <Text>Rating: {doctor.rating}</Text>
                      <FaStar color="green" />
                    </Flex>
                  </Box>

                  <Button
                    onClick={() => handleClick(doctor.id)}
                    mt="10px"
                    color={'white'}
                    bg={'#222566'}
                    _hover={{
                      bg: '#3879E9',
                    }}
                  >
                    Book Appointment
                  </Button>
                </Box>
              );
            })
          )}
        </Box>
        <Box
          m="5px 5px"
          alignItems={'center'}
          display={'flex'}
          justifyContent={'center'}
          gap="5px"
        >
          <Button
            color={'white'}
            bg={'#222566'}
            _hover={{
              bg: '#3879E9',
            }}
            isDisabled={page == 1}
            onClick={() => handlePageChange(-1)}
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
                onClick={() => setPage(ind + 1)}
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
            isDisabled={page === totalPages}
            onClick={() => handlePageChange(+1)}
          >
            NEXT
          </Button>
        </Box>
      </Box>
      {/* </Flex> */}
    </>
  );
};

export default Doctors;
