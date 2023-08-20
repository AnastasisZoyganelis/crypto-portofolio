import {useState} from 'react'
import './FormSignup.css'
import { Link } from 'react-router-dom'



const FormSignup = () => {
    const [errors, setErrors] = useState([]);

  
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const discordName = e.target.discordName.value;
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
            const response = await fetch('/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ discordName, email, password }),
            });
        
            if (response.ok) {
              // User registered successfully, handle the response
              const data = await response.json();
              console.log(data.message);
            } else {
              // Handle registration error
              console.error('Registration failed');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        }
      };



  return (
    <>
    
    <div className='center-container'>
    <div className="container">
        <h2>Signup Now</h2>
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
                <label className="discordName">Discord Name</label>
                <input type="text" placeholder='enter your discord name' maxLength={20} id="discordName" name="discordName" pattern="^[^;<>]+$" required/>
            </div>
            <div className="form-group">
                <label className="email">Email</label>
                <input type="email" id="email"  placeholder='enter your email' name="email"  maxLength={80}  pattern="^[^;<>]+$" required/>
            </div>
            <div className="form-group">
                <label className="password">Password</label>
                <input className="password" id="password"  placeholder='enter your password' name="password" maxLength={30} pattern="^[^;<>]+$" required/>
            </div>
            <button type="submit" className="btn">Register</button>
        </form>
        <p className='account-text-login'>Already have an account? <Link to="/login" className='login-link'>Login</Link></p>
    </div>
    </div>
  </>)
}

export default FormSignup
