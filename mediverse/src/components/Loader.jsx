
import React from 'react'
import {Flex,Spinner} from '@chakra-ui/react'

const Loader = () => {
  return (
    <Flex justifyContent="center" h="100vh">
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
      m = "100px"

    />
  </Flex>
  )
}

export default Loader