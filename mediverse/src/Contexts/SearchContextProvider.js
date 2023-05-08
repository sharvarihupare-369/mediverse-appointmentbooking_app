
import React, { createContext, useState } from 'react'


export const SearchContext = createContext()

const SearchContextProvider = ({children}) => {
     const [bookingformPatient, setBookingformPatient] = useState({});
     const [loading, setLoading] = useState(false);
     const [data,setData] = useState([])
     const [status,setStatus] = useState(false)
     const [error, setError] = useState(false);
     const [doctorname,setDoctorname] = useState('')
     const [price,setPrice] = useState(null)
  return (
   <SearchContext.Provider value={{setData,data,setStatus,status,loading,setLoading,error,setError,doctorname,setDoctorname,bookingformPatient, setBookingformPatient,price,setPrice}}>
    {children}
   </SearchContext.Provider>
  )
}

export default SearchContextProvider