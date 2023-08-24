import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './FormLogin.css'
const FormLogin = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate(); // Get the navigate function
  const { setIsLoggedIn,setUserEmail } = useAuth();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const newErrors = [];

    if (!/[A-Z]/.test(password)) {
      newErrors.push('Password must contain 1 capital letter.');
    }

    if (!/\d/.test(password)) {
      newErrors.push('Password must contain 1 number.');
    }

    if (/[^a-zA-Z0-9]/.test(password)) {
      newErrors.push('Special characters are not allowed.');
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      try {
        const response = await fetch('http://localhost:3301/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          // User logged in successfully, handle the response
          const data = await response.json();
          alert(data.message);

          // Redirect to another page, for example, the user's dashboard
          setIsLoggedIn(true);
          setUserEmail(email);
          navigate('/');
        } else {
          // Handle login error
          const errorData = await response.json();
          console.error('Login failed:', errorData.error);
          setErrors([errorData.error]);
          
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('Something went wrong');
      }
    }
  };



  return (
    <>
    
    <div className='center-container'>
    <div className="container">
        <h2>Login Now</h2>
        {errors.length > 0 && (
            <div className="error-message">
              <ul>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          <form onSubmit={handleFormSubmit}>
           
            <div className="form-group">
                <label className="email">Email</label>
                <input type="email" id="email"  placeholder='enter your email' name="email"  maxLength={80}  pattern="^[^;<>{}]+$" required/>
            </div>
            <div className="form-group">
                 <label className="password">Password</label>
                <input className="password" id="password"  placeholder='enter your password' name="password" maxLength={30} pattern="^[^;<>{}]+$" required/>
            </div>
            <button type="submit" className="btn">Login</button>
        </form>
        <p className='account-text-login'>Don't have an account? <Link to="/signup" className='login-link'>Signup</Link></p>
    </div>
    </div>
  </>)
}

export default FormLogin



