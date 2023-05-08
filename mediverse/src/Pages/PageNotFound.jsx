
import React from 'react'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box
} from '@chakra-ui/react'

const PageNotFound = () => {
  return (
    <Box m="150px" >

    <Alert textAlign={"center"} status='error'>
    <AlertIcon />
    <AlertTitle>Page Not Found!</AlertTitle>
    <AlertDescription>Please Check url and Enter the correct url</AlertDescription>
  </Alert>
    </Box>
  )
}

export default PageNotFound