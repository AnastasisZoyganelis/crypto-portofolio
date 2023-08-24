import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
const Navigation = () => {
  const { isLoggedIn,userEmail,setIsLoggedIn } = useAuth(); // Access isLoggedIn state and user info from context
  const changeLoginState = () =>{
    setIsLoggedIn(false);
  }

  return (
    <nav className='navigation'>
      <ul className='navigation-bar'>
        
        <li><Link to='/' className='navigation-item1'>HOME</Link></li>
        <li><Link to='/stats' className='navigation-item2'>STATS</Link></li>
        <li><Link to='https://discord.gg/DfeYM3hy' className='navigation-item3'>DISCORD</Link></li>
      </ul>
      {isLoggedIn ? (
        // If the user is logged in, don't render the "SIGNUP" and "LOGIN" buttons.
        <div className='user-buttons-afterLogin'>
          
          <h3 className='user-email'>Welcome, {userEmail}</h3>
          <button className='button-logout'>
            <Link to='/' className='button-signup-link' onClick={changeLoginState}>Log Out</Link>
          </button>
          <button className='button-portofolio'>
            <Link to='/portofolio' className='button-signup-link' onClick={changeLoginState}>Portofolio</Link>
          </button>
        </div>
      ) : (
        // If the user is not logged in, render the "SIGNUP" and "LOGIN" buttons.
        <div className='auth-buttons'>
          <button className='button-signup'>
            <Link to='/signup' className='button-signup-link'>SIGNUP</Link>
          </button>
          <button className='button-login'>
            <Link to='/login' className='button-login-link'>LOGIN</Link>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
