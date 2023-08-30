import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import './Portofolio.css'
import Navigation from './navigation';

function Portofolio() {
  const { userEmail,setIsLoggedIn } = useAuth();
  const [Finaldata, setData] = useState([]);
  const [error, setError] = useState(null);

  
  const changeLoginState = () =>{
    setIsLoggedIn(true);
  }
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3301/portofolio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail}),
      });

      if (response.ok) {
        // User logged in successfully, handle the response
        const data = await response.json();
        setData(data);
        

     
      } else {
        // Handle login error
        const errorData = await response.json();
        console.error('User failed:', errorData.error);
        setError([errorData.error]);
        alert(error);
        
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div>
      <div className='login-verified'>
     {changeLoginState()}
     </div>
     <Navigation/>
      <table className='table-container'>
      <tbody>
        <tr>
            <th className='table-head'>Portofolio</th>
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin1}</td>
            
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin2}</td>
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin3}</td>
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin4}</td>
        </tr>
        <tr>
            <td className='table-td' >{Finaldata.coin5}</td>
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin6}</td>
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin7}</td>
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin8}</td>
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin9}</td>
        </tr>
        <tr>
            <td className='table-td'>{Finaldata.coin10}</td>
        </tr>
      </tbody>
    </table>
    
    
    <button className='fetch-data' onClick={fetchData}>Check Portofolio</button> 
    </div>
  );
}

export default Portofolio;
