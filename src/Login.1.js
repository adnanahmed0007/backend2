import React, { useState } from 'react';
import './Login.css'; // Import CSS file for styling
import axios from 'axios';

const Login1 = () => {
   

// Set default configuration for axios
  // Set your base URL
axios.defaults.withCredentials = true; // Include cookies in requests

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendlogin=axios.post(" http://localhost:7544/api/auth/login",{
      email,
      password,

    })
    if(sendlogin)
    {
      console.log("login is confirmed")

    }
     else{
      console.log("nor comuirgem")
     }
  };

  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <p className="register-link">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login1;
