import React from 'react'
import {Flex , Stack,Alert,AlertIcon} from '@chakra-ui/react'

const Error = () => {
  return (
    // <Flex justifyContent="center">
    <Stack spacing={3} mb="100px" mt="100px" h="100vh">
  <Alert status='error' textAlign={"center"}>
    <AlertIcon />
    There was an error processing your request...Please Refresh Page
  </Alert>
  </Stack>
  // </Flex>
  )
}

export default Error