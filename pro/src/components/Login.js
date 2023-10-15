import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
  
    let navigate=useNavigate();
    
 
  
      let login=async ()=>{
        let fd=new FormData();
        fd.append("email",email);
        fd.append("password",password);
  
        let reqOptions={
          method:"POST",
          body:fd,
        }
  
        let JSONData=await fetch("/login",reqOptions);
        let JSOData=await JSONData.json();
            if(JSOData.IsLoggedIn == true){
              navigate('/profile',{state:JSOData});
            }else{
              alert(JSOData.msg);
            }
            console.log(JSOData);
      }
   

  return (
    <div>
       <form>
        <h2>Login</h2>
      
      <div>
        <input  type="email" placeholder="Email" onChange={(e)=>{
          setEmail(e.target.value)
        }}></input>
        </div>
        
        <div>
        <input type='password' placeholder="Password" onChange={(e)=>{
          setPassword(e.target.value)
        }}></input>
        </div>
        <div>
        <button className='login-button1' type="button" onClick={()=>{
           login()
        }} >Log in</button>
        </div>
        <button className='signup-button1'>
        <Link   to="/signup">SignUp</Link>
        </button>
        </form>
    </div>
  );
}

export default Login;