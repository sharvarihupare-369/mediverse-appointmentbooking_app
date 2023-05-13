import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  
  //  const userdetail = {
  //   email : email,
  //   password : password,
  //   firstName : firstName,
  //   lastName : lastName
  //  } 

  //  const fetchdata = async() => {
  //   //  axios.post(`http://localhost:3000/signup`,userdetail).then((res)=>console.log(res)).catch((err)=>console.log(err))
  //   // let res = await fetch(`http://localhost:3000/signup`,{
    //    method  : "POST",
    //    headers : {
    //     "Content-type" : "application/json"
    //    },
    //    body : JSON.stringify(userdetail)
    // })
    //  console.log(res)
  //  }

   const handleSubmit = (e) => {
    e.preventDefault()
    const userdetail = {
      email : email,
      password : password,
      firstName : firstName,
      lastName : lastName
     } 
 const data=axios.post("https://doctordata.onrender.com/signup",userdetail)
    console.log(userdetail,data);
    // fetchdata()
   }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
      <label>Email</label>
      <input type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div>
      <label>Password</label>
      <input type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div>
      <label>FirstName</label>
      <input type='text' placeholder='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
      </div>
      <div>
      <label>LastName</label>
      <input type='text' placeholder='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)} />
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup