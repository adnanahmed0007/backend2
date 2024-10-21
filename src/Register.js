import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Mycontext } from './Context';
import axios from "axios";
import './Register.css'; // Import CSS file for styling

const Register = () => {
    const { name, SetName } = useContext(Mycontext);
    const { email, setEmail } = useContext(Mycontext);
    const { password, setPassword } = useContext(Mycontext);
    const { address, setAddress } = useContext(Mycontext);
    const { phoneNumber, setPhonenumber } = useContext(Mycontext);
    
    const [click1, setClick] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:7544/api/auth/register", {
                name,
                email,
                address,
                phoneNumber,
                password,
            });
            if (response) {
                console.log(response.data);
            } else {
                console.log(e);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className="register-form">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter your name" name="name" id="name" required
                    onChange={(e) => SetName(e.target.value)} />
                
                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required
                    onChange={(e) => setPassword(e.target.value)} />

                <label htmlFor="address"><b>Address</b></label>
                <input type="text" placeholder="Enter your address" name="address" id="address" required
                    onChange={(e) => setAddress(e.target.value)} />

                <label htmlFor="phoneNumber"><b>Mobile No</b></label>
                <input type="number" placeholder="Enter your phone number" name="phoneNumber" id="phoneNumber" required
                    onChange={(e) => setPhonenumber(e.target.value)} />

                <p>By creating an account you agree to our Terms & Privacy</p>
                <button type="submit" className="register-btn">Register</button>

                <div className="signin">
                    <p>Already have an account? <Link to={"/login"}>Login</Link></p>
                </div>

                <div className='info-user'>
                    <button type="button" onClick={() => setClick(!click1)}>Check detail</button>
                    {click1 && name && email && address && phoneNumber && password && (
                        <div className="user-details">
                            <h2>Your Details</h2>
                            <p>Your name in the database is saved as {name}</p>
                            <p>Your address in the database is saved as {address}</p>
                            <p>Your email in the database is saved as {email}</p>
                            <p>Your phone number in the database is saved as {phoneNumber}</p>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}

export default Register;
