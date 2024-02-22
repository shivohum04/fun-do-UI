import './signin.css';
import React from "react";
import { Link } from 'react-router-dom';

function Signin() {
  return (
    <div className="signin-main">

      <div className='signin-google'></div>
    
      <div className='sigin-login'><span>Login</span></div>
      <div className='signin-text'><span>Use your Google Account</span></div>
      <div className='signin-username'><input className='username-box'type='text' placeholder='Email or phone*'></input></div>
      <div className='signin-password'><input className='password-box'type='text' placeholder='Password*'></input></div>
      <div className='signin-forgot'><span>Forgot Password?</span></div>
      <div className='signin-lower'>
        <div className='signin-signup'>
        <button className='register-b'><Link to='/'>create account</Link></button>
        </div>
        <div className='login-login'>
          <button className='login-b'>login</button>
        </div>
      </div>




    </div>
  );
}

export default Signin;
