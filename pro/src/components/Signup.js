import React from 'react'
import{ useState } from 'react';
import { Link } from 'react-router-dom';





function Signup() {

    const [name,setName]=useState("")
  
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [conformpassword,setConformpassword]=useState("")
  const [age,setAge]=useState("")
  const [gender,setGender]=useState("")
  const [mobileNo,setMobileNo]=useState("")

  const Signup = async () => {
    if (password !== conformpassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }
  
    const fd = new FormData();
    fd.append("name", name);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("conformpassword", conformpassword);
    fd.append("age", age);
    fd.append("gender", gender);
    fd.append("mobileNo", mobileNo);
  
    let reqOptions = {
      method: "POST",
      body: fd,
    };
  
    let JSONData = await fetch("/Signup", reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
    alert("User created successfully");
  };


  return (
    <div>
 <form >

  <div >
  <h1>Sign Up</h1> 
  
  </div>
    <div>
        <input type='text' placeholder=' name' onChange={(e)=>{
          setName(e.target.value)
        }} />

    
    </div>
    <div>
        <input  type='email' placeholder='Email Address' onChange={(e)=>{
          setEmail(e.target.value)
        }}/>
    </div>
    <div>
        <input type='password' placeholder='Password' onChange={(e)=>{
          setPassword(e.target.value)
        }}/>
    </div>
    <div>
        <input type='password' placeholder='Conform Password' onChange={(e)=>{
          setConformpassword(e.target.value)
        }}/>
    </div>
    <div>
        <input type='number' placeholder='Age' onChange={(e)=>{
          setAge(e.target.value)
        }}/>
    </div>
    <div>
        


<select className='select-input'  onChange={(e)=>{
          setGender(e.target.value)
        }} >
<option >Gender...</option>
    <option>Male</option>
    <option>Female</option>
    <option>Other</option>
    
</select>

    </div>
    <div>
        <input  type='number' placeholder='Mobile No' onChange={(e)=>{
          setMobileNo(e.target.value)
        }}/>
    </div>

    <button type='button' className='signup-button' onClick={Signup}>Sign Up</button>
    <button className='login-button'>
    <Link  to="/">Login</Link>
    </button>
    
</form>

    </div>
  )
}

export default Signup


