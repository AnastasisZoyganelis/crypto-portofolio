import React from 'react'
import './icon.css';
import { useState } from 'react';
import { useAuth } from './AuthContext';


const Icon = () => {
  const { isLoggedIn } = useAuth();
  const [pressedButtons, setPressedButtons] = useState([]);
  const [message, setMessage] = useState('');
  const [textInput, setTextInput] = useState('');
  const [inputerror, setInputerror] = useState('');
  const [enteredTexts, setEnteredTexts] = useState([]);


  const handleSubmitClick = async (e)=> {

    e.preventDefault();
    if (isLoggedIn){
    // Send a POST request to add all pressed buttons to the database
      try{
      const response = await fetch('http://localhost:3301/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buttons: pressedButtons }), // Send all pressed buttons to the server
      })
      
          if (response.ok) {
            // Buttons added successfully
            // You can update the UI or show a success message
            setPressedButtons([]);
            alert('Coins added successfully');
          } else {
            if (response.status === 400) {
              alert('Bad request: Check your input data');
            } else if (response.status === 401) {
              alert('Unauthorized: You are not allowed to perform this action');
            } else if (response.status === 500) {
              alert('Server error: Please try again later');
            }
            else if (response.status === 515) {
              alert('Portofolio updated');
            } else {
              alert('An error occurred: ' + response.statusText);
            }
          }
        }
        catch(error)  {
          // Handle network or other errors
          alert('Network error');
          console.log(error);
        };
    }else{
      alert('Please Log in first');
    }

  };


  const handleButtonClick = (buttonId) => {
    if (pressedButtons.length < 10) {
      if (pressedButtons.includes(buttonId)) {
        // Button already in the array
        setMessage(`Can't add the same button`);
      } else {
        setPressedButtons([...pressedButtons, buttonId]);
        setMessage('');
      }
    } else {
      setMessage('Maximum of 10 coins allowed');
    }
    
  };
  
  const handleEraseClick = () => {
    if (pressedButtons.length > 0) {
      setPressedButtons([]); // Set the array to an empty array
      setMessage('');
    }
  };
  const handleTextInputChange = (event) => {
    setTextInput(event.target.value);
  };

  const handleAddTextClick = () => {
    if (textInput.trim() !== '' && !enteredTexts.includes(textInput)) {
      setPressedButtons([...pressedButtons, textInput]);
      setEnteredTexts([...enteredTexts, textInput]);
      setTextInput('');
      setInputerror('');
    } else if (enteredTexts.includes(textInput)) {
      setInputerror('Text already entered');
    }
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTextClick();
    }
  };
  const inputUnder6=()=>{
    return (
      <div>
      
          <h2 className='manual-input-title'>ENTER THE COIN MANUALLY</h2>
          <input
            type="text"
            placeholder="Enter your coin "
            title='Like this INJECTIVE(INJ)'
            maxLength={20}
            className='input-container-textarea'
            pattern="^[^;<>]+$"
            
            onKeyDown={handleKeyDown}
            value={textInput}
            onChange={handleTextInputChange}
          />
          <button className="submit-button-manually" onClick={handleAddTextClick}>Add coin</button>
        
        <p className="error-message">{inputerror}</p>
    </div>
    );

  };


  return (
    <div>
      <div className='framer-icons-layer0'>
        <button className='Polcadot' id='Polcadot' onClick={() => handleButtonClick('Polcadot(DOT)')}></button>
        <button className='Thorchain' id='Thorchain'  onClick={() => handleButtonClick('Thorchain(RUNE)')}></button>
        <button className='Cosmos' id='Cosmos' onClick={() => handleButtonClick('Cosmos(ATOM)')}></button>
        <button className='Chainlink' id='Chainlink' onClick={() => handleButtonClick('Chainlink(LINK)')} ></button>
        <button className='Quant' id='Quant'onClick={() => handleButtonClick('Quant(QNT)')}></button>
        
        
      </div>
      <div className='framer-icons-layer1'>
        <button className='Bitcoin'  onClick={() => handleButtonClick('Bitcoin(BTC)')}></button>
        <button className='Ethereum'  onClick={() => handleButtonClick('Ethereum(ETH)')}></button>
        <button className='BNB' onClick={() => handleButtonClick('BNB')}></button>
        <button className='Cardano'  onClick={() => handleButtonClick('Cardano(ADA)')}></button>
        <button className='Solana'  onClick={() => handleButtonClick('Solana(SOL)')}></button>
        <br/>
        <button className='Bitcoin-Bash'  onClick={() => handleButtonClick('Bitcoin-Bash(BCH)')}></button>
        <button className='Avalance'  onClick={() => handleButtonClick('Avalance(Avax)')}></button>
        <button className='Hedera' onClick={() => handleButtonClick('Hedera(HBAR)')}></button>
        <button className='NEAR'  onClick={() => handleButtonClick('NEAR')}></button>
        <button className='INJECTIVE'  onClick={() => handleButtonClick('INJECTIVE(INJ)')}></button>
        <br/>
        <button className='FANTOM'  onClick={() => handleButtonClick('FANTOM(FTM)')}></button>
        <button className='SUI'  onClick={() => handleButtonClick('SUI')}></button>
        <button className='APTOS' onClick={() => handleButtonClick('APTOS')}></button>
        <button className='AZERO' onClick={() => handleButtonClick('AZERO')}></button>
        <button className='XRP' onClick={() => handleButtonClick('XRP')}></button>
        <br/>
        <button className='STELLAR' onClick={() => handleButtonClick('STELLAR')}></button>
        <button className='KASPA' onClick={() => handleButtonClick('KASPA')}></button>
        <button className='ALGORAND' onClick={() => handleButtonClick('ALGORAND(ALGO)')}></button>
        
      </div>
      <div className='framer-icons-layer2'>
        <button className='POLYGON' onClick={() => handleButtonClick('MATIC')}></button>
        <button className='ARBITRUM' onClick={() => handleButtonClick('ARBITRUM(ARB)')}></button>
        <button className='OPTIMISM' onClick={() => handleButtonClick('OPTIMISM(OP)')}></button>
        <button className='METIS' onClick={() => handleButtonClick('METIS')}></button>
        <button className='STACKS'  onClick={() => handleButtonClick('STACKS(STX)')}></button>
        <br/>
        <button className='LOOPRING'  onClick={() => handleButtonClick('LOOPRING(LRC)')}></button>
        
      </div>
      <div className='framer-icons-gaming'>
        <button className='ILLUVIUM'  onClick={() => handleButtonClick('ILLUVIUM(ILV)')}></button>
        <button className='GALA' onClick={() => handleButtonClick('GALA')}></button>
        <button className='APECOIN' onClick={() => handleButtonClick('APECOIN(APE)')}></button>
        <button className='MAGIC' onClick={() => handleButtonClick('MAGIC')}></button>
        
      </div>
      <div className='framer-icons-memes'>
        <button className='DOGECOIN'  onClick={() => handleButtonClick('DOGE')}></button>
        <button className='PEPE' onClick={() => handleButtonClick('PEPE')}></button>
        <button className='SHIBA-INU'  onClick={() => handleButtonClick('SHIBA INU')}></button>
        <button className='FLOKI' onClick={() => handleButtonClick('FLOKI')}></button>
        
      </div>
      <div className='framer-icons-defi'>
        <button className='INJECTIVE'  onClick={() => handleButtonClick('INJECTIVE(INJ)')}></button>
        <button className='CURVE-DAO' onClick={() => handleButtonClick('CURVE DAO(CRV)')}></button>
        <button className='AAVE' onClick={() => handleButtonClick('AAVE')}></button>
        <button className='TERRA-LUNA' onClick={() => handleButtonClick('TERRA-LUNA(LUNC)')}></button>
        <button className='SYNTHETIC' onClick={() => handleButtonClick('SYNTHETIC (SNX)')}></button>
      </div>
      <div className='pressed-buttons-column'>
        <h2 className='portofolio-title'>Current Portofolio(MAX 10)</h2>
        <div className='pressed-buttons-list'>
        {pressedButtons.length === 0 ? (
          <div className='pressed-button-empty-portfolio'>EMPTY</div>
        ) : (pressedButtons.map((buttonId) => (
            <div key={buttonId} className='pressed-button'>
              {buttonId}
            </div>
          ))
        )}
        </div>
        <p className="error-message">{message}</p>
        
        <div className="buttons-row">
          <button className="action-button-submit" onClick={handleSubmitClick}>Submit</button>
          
          <button className="action-button-erase" onClick={handleEraseClick}>Erase</button>
          {!isLoggedIn && <p className="login-first-message">*Log in first</p>}
        </div>
      </div>
      {pressedButtons.length <= 5 ? (
        <div className="input-container">
          {inputUnder6()}
        </div>
      ) : (
        <div className="input-container-over5">
          {inputUnder6()}
        </div>
      )}
    </div>
  )
}

export default Icon
