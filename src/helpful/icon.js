import React from 'react'
import './icon.css';
import { useState } from 'react';



const Icon = () => {
  const [pressedButtons, setPressedButtons] = useState([]);
  const [message, setMessage] = useState('');
  const [textInput, setTextInput] = useState('');
  const [inputerror, setInputerror] = useState('');
  const [enteredTexts, setEnteredTexts] = useState([]);

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
      const updatedButtons = pressedButtons.slice(0, -1); // Remove the last element
      setPressedButtons(updatedButtons);
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
            placeholder="Enter your coin"
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
        <button className='coin-1' id='button-coin-1' onClick={() => handleButtonClick('button-coin-1')}></button>
        <button className='coin-2' id='button-coin-2'  onClick={() => handleButtonClick('button-coin-2')}></button>
        <button className='coin-3' id='button-coin-3' onClick={() => handleButtonClick('button-coin-3')}></button>
        <button className='coin-4' id='button-coin-4' onClick={() => handleButtonClick('button-coin-4')} ></button>
        <button className='coin-5' id='button-coin-5'onClick={() => handleButtonClick('button-coin-5')}></button>
        <br/>
        <button className='coin-6' id='button-coin-6' onClick={() => handleButtonClick('button-coin-6')}></button>
        <button className='coin-7' id='button-coin-7' onClick={() => handleButtonClick('button-coin-7')}></button>
        <button className='coin-7' id='button-coin-8' onClick={() => handleButtonClick('button-coin-8')}></button>
        <button className='coin-9' id='button-coin-9' onClick={() => handleButtonClick('button-coin-9')}></button>
        <button className='coin-10' id='button-coin-10' onClick={() => handleButtonClick('button-coin-10')}></button>
      </div>
      <div className='framer-icons-layer1'>
        <button className='coin-11' id='button-coin-11' onClick={() => handleButtonClick('button-coin-11')}></button>
        <button className='coin-12' id='button-coin-12' onClick={() => handleButtonClick('button-coin-12')}></button>
        <button className='coin-13' id='button-coin-13' onClick={() => handleButtonClick('button-coin-13')}></button>
        <button className='coin-14' id='button-coin-14' onClick={() => handleButtonClick('button-coin-14')}></button>
        <button className='coin-15' id='button-coin-15' onClick={() => handleButtonClick('button-coin-15')}></button>
        <br/>
        <button className='coin-16' id='button-coin-16' onClick={() => handleButtonClick('button-coin-16')}></button>
        <button className='coin-17' id='button-coin-17' onClick={() => handleButtonClick('button-coin-17')}></button>
        <button className='coin-18' id='button-coin-18' onClick={() => handleButtonClick('button-coin-18')}></button>
        <button className='coin-19' id='button-coin-19' onClick={() => handleButtonClick('button-coin-19')}></button>
        <button className='coin-20' id='button-coin-20' onClick={() => handleButtonClick('button-coin-20')}></button>
      </div>
      <div className='framer-icons-layer2'>
        <button className='coin-21' id='button-coin-21' onClick={() => handleButtonClick('button-coin-21')}></button>
        <button className='coin-22' id='button-coin-22' onClick={() => handleButtonClick('button-coin-22')}></button>
        <button className='coin-23' id='button-coin-23' onClick={() => handleButtonClick('button-coin-23')}></button>
        <button className='coin-24' id='button-coin-24' onClick={() => handleButtonClick('button-coin-24')}></button>
        <button className='coin-25' id='button-coin-25' onClick={() => handleButtonClick('button-coin-25')}></button>
        <br/>
        <button className='coin-26' id='button-coin-26' onClick={() => handleButtonClick('button-coin-26')}></button>
        <button className='coin-27' id='button-coin-27' onClick={() => handleButtonClick('button-coin-27')}></button>
        <button className='coin-28' id='button-coin-28' onClick={() => handleButtonClick('button-coin-28')}></button>
        <button className='coin-29' id='button-coin-29' onClick={() => handleButtonClick('button-coin-29')}></button>
        <button className='coin-30' id='button-coin-30' onClick={() => handleButtonClick('button-coin-30')}></button>
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
          <button className="action-button-submit">Submit</button>
          <button className="action-button-erase" onClick={handleEraseClick}>Erase</button>
          
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
