 import React, { useState } from 'react'
 import {Routes,Route} from "react-router-dom"
 import Login1 from './Login.1'
 import Register from './Register'
 import Header from './Header'
 import Home from './Home'
 import Content from './Content'
import { Mycontext } from './Context'
 const App = () => {
  const [name,SetName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [address,setAddress]=useState("");
  const [ phoneNumber,setPhonenumber]=useState("");
  const [content,setContent]=useState("");
   return (
    <Mycontext.Provider value={{name,SetName,email,setEmail,password,setPassword,address,setAddress,phoneNumber,setPhonenumber,content,setContent}}> 
    <Header />
    <Routes>
    
     <Route path="/login" element={<Login1 />} />
     <Route path="/register" element={<Register />}/>
     <Route path="/" element={<Home />} />
<Route path="/content" element={<Content />} />
        
     </Routes>
     
     </Mycontext.Provider>
     
   )
 }
 
 export default App
 