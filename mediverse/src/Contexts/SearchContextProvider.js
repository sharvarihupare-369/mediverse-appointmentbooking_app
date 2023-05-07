
import React, { createContext, useState } from 'react'


export const SearchContext = createContext()

const SearchContextProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
     const [data,setData] = useState([])
     const [status,setStatus] = useState(false)
     const [error, setError] = useState(false);

  return (
   <SearchContext.Provider value={{setData,data,setStatus,status,loading,setLoading,error,setError}}>
    {children}
   </SearchContext.Provider>
  )
}

export default SearchContextProvider