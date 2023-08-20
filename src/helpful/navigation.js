import React from 'react'
import './navigation.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
    
  return (
    <nav className='navigation' >
        
        <ul className='navigation-bar' >
            <li ><Link to='/' className='navigation-item1'>HOME</Link></li>
            <li ><Link to='/stats'  className='navigation-item2'>STATS</Link></li>
            <li ><Link to='/discord' className='navigation-item3'>DISCORD</Link></li>

        </ul>
        <button className='button-signup'><Link to='/signup' className='button-signup-link'>SIGNUP</Link></button>
        <button className='button-login'><Link to='/login' className='button-login-link' >LOGIN</Link></button>
    </nav>
  )
}

export default Navigation
