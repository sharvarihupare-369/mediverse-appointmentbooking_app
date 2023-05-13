import React, { useReducer } from 'react';
import { Box, FormLabel, Input, Container, Button } from '@chakra-ui/react';
import axios from 'axios';
const initialState = {
  name: 'Dr.',
  image:"",
  specialist: '',
  experience: '',
  price: 0,
  patients: 0,
  rating: 0,
};

const reducer = (state,action) => {
    switch(action.type){
        case "Input_Vals" : {
            return {
                ...state,
                [action.payload.name] : action.payload.value
            }
        }
        case "ResetVals" : {
            return {...initialState}
        }
        default : {
            throw new Error(`Invalid Action Type`)
        }
    }
} 

const Admin = () => {

    const [state,dispatch] = useReducer(reducer,initialState)

    const {name,image,specialist,experience,price,patients,rating} = state

    const handleChange = (e) => {
        let {name,type,value} = e.target

        const payload = {
            name : name,
            value : type === "number" ? Number(value) : value
        }
        dispatch({type:"Input_Vals", payload : payload})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`https://doctordata.onrender.com/doctors`,state).then((res)=>console.log(res)).catch((err)=>console.log(err))
        dispatch({type:"ResetVals"})
    }

  return (
    <Box>
      <Container>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormLabel>Name</FormLabel>
            <Input type="text" name = "name" value={name} onChange={handleChange} />
          </Box>

          <Box>
            <FormLabel>Image</FormLabel>
            <Input type="text" name="image" value={image} onChange={handleChange} />
          </Box>
          <Box>
            <FormLabel>Specialist</FormLabel>
            <Input type="text" name='specialist' value={specialist} onChange={handleChange} />
          </Box>
          <Box>
            <FormLabel>Experience</FormLabel>
            <Input type="text" name="experience" value={experience} onChange={handleChange} />
          </Box>
          <Box>
            <FormLabel>Price</FormLabel>
            <Input type="number" name='price' value={price} onChange={handleChange} />
          </Box>
          <Box>
            <FormLabel>Patients</FormLabel>
            <Input type="number" name='patients' value={patients} onChange={handleChange} />
          </Box>
          <Box>
            <FormLabel>Rating</FormLabel>
            <Input type="number" name='rating' value={rating} onChange={handleChange} />
          </Box>
          <Box m="10px 230px">
            <Button type="submit">Submit</Button>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Admin;
