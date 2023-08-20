import {useState} from 'react'
import './FormSignup.css'
import { Link } from 'react-router-dom'



const FormLogin = () => {
    const [errors, setErrors] = useState([]);

  
    const handleFormSubmit = (e) => {
        e.preventDefault();
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
          // Handle form submission logic here
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
            <button type="submit" className="btn">Register</button>
        </form>
        <p className='account-text-login'>Don't have an account? <Link to="/signup" className='login-link'>Signup</Link></p>
    </div>
    </div>
  </>)
}

export default FormLogin



