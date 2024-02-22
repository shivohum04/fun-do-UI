import React from "react";
import './signup.css';
import { Link } from 'react-router-dom';

function Signup(){
    return(
        <div className="signup-main">
            <div className="signup-details">
            <div className="google-logo"></div>
            <div className="signup-create-text">create your account</div>
                <div className="signup-input-fields">
                    <div className="signup-fname">
                        <input className="signup-fname-ip" type="text" placeholder="First Name*"></input>
                    </div>
                    <div className="signup-lname">
                        <input className="signup-lname-ip" type="text" placeholder="Last Name*"></input>
                    </div>
                </div>
                <div className="signup-username"><input className="signup-username-ip" type="text" placeholder="username*"></input></div>
                <div className="signup-pass-main">
                    <div className="signup-pass"><input className="signup-pass-ip" type="text" placeholder="Password*"></input></div>
                    <div className="signup-pass-confirm"><input className="signup-pass-confirm-ip" type="text" placeholder="Confirm Password*"></input></div>
                </div>
                <div className="signup-low-text">use 8 or more characters with a maximum of letters, numbers & symbols</div>
                <div className="signup-show-pass"><input type="checkbox" placeholder="show passoword"></input></div>
                <div className="signup-lower">
                    <div className="signup-lower-signin"><Link to='/signin'>signin account</Link></div>
                    <div className="signup-lower-next">next</div>
                </div>
            </div>
            <div className="signup-animation">
                <div className="signup-anim-image"></div>   
                <div className="signup-anim-text">one account. All of google working for you</div>
            </div>
        </div>
    )
}
export default Signup;