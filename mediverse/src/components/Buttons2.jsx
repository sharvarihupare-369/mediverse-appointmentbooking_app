import React from 'react'
import {Box,Button} from '@chakra-ui/react'

const Buttons2 = ({page,setPage,totalPages}) => {
  return (
    <Box
    m="40px 5px"
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
  )
}

export default Buttons2