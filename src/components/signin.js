import './signin.css';
import React, { useState } from "react";
import { Link} from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Signin() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  function LogIn(){
    alert('login')
    if (!username|| !password) {
      alert("Please fill all fields.");
      return;
    }
      const data = { username, password };
      console.log(data);
      

      const requestSignInURL = "https://fundoonotes.incubation.bridgelabz.com/api/user/login"

      axios.post(requestSignInURL, data)
          .then(function (response) {
              console.log(response);
              navigate('/dashboard');
              
          })
          .catch(function (error) {
              console.log(error);
              alert('wrong email or password')
              
          });
  };

  return (
    <div className="signin-main">

      <div className='signin-google'></div>
    
      <div className='sigin-login'><span>Login</span></div>
      <div className='signin-text'><span>Use your Google Account</span></div>
      <div className='signin-username'><input className='username-box'type='text' placeholder='Email or phone*' value={username} onChange={(e) => setUsername(e.target.value)} ></input></div>
      <div className='signin-password'><input className='password-box'type='text' placeholder='Password*'  value={password} onChange={(e) => setPassword(e.target.value)}></input></div>
      <div className='signin-forgot'><span>Forgot Password?</span></div>
      <div className='signin-lower'>
        <div className='signin-signup'>
        <button className='register-b'><Link to='/'>create account</Link></button>
        </div>
        <div className='login-login'>
          <button className='login-b' onClick={LogIn}>login</button>
          <button className='login-next'><Link to='/dashboard'>Jump</Link></button>
        </div>
      </div>




    </div>
  );
}

export default Signin;
