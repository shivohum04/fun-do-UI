import React, { useState } from "react";
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const signupNext = () => {
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            alert("Please fill all fields.");
            return;
        }
        const service = "special";
        const data = { firstName, lastName, service, email, password };
        console.log(data);
        console.log(typeof firstName);
        console.log(typeof lastName);
        console.log(typeof email);
        console.log(typeof password);
        console.log(typeof service);

        const requestSignUpURL = process.env.REACT_APP_BACKEND_Signup_URL;

        axios.post(requestSignUpURL, data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                
            });
    };

    return (
        <div className="signup-main" id="signup-main">
            <div className="signup-details">
                <div className="google-logo"></div>
                <div className="signup-create-text">create your account</div>
                <div className="signup-input-fields">
                    <div className="signup-fname">
                        <input
                            className="signup-fname-ip"
                            type="text"
                            placeholder="First Name*"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="signup-lname">
                        <input
                            className="signup-lname-ip"
                            type="text"
                            placeholder="Last Name*"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="signup-username">
                    <input
                        className="signup-username-ip"
                        type="email"
                        placeholder="Email*"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="signup-pass-main">
                    <div className="signup-pass">
                        <input
                            className="signup-pass-ip"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password*"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="signup-pass-confirm">
                        <input
                            className="signup-pass-confirm-ip"
                            type="password"
                            placeholder="Confirm Password*"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="signup-low-text">use 8 or more characters with a mix of letters, numbers & symbols</div>
                <div className="signup-show-pass">
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={(e) => setShowPassword(e.target.checked)}
                    /> Show Password
                </div>
                <div className="signup-lower">
                    <div className="signup-lower-signin"><Link to='/signin'>Sign in instead</Link></div>
                    <div className="signup-lower-next"><button onClick={signupNext} className="signup-next-b">Next</button></div>
                </div>
            </div>
            <div className="signup-animation">
                <div className="signup-anim-image"></div>   
                <div className="signup-anim-text">One account. All of Google working for you</div>
            </div>
        </div>
    );
}

export default Signup;
