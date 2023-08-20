import React from 'react'
import './heroleftside.css'
import Verticalline from './Verticalline'
import Icon from './icon'


const Heroleftside = () => {
  return (
    <div>
      <h2 className='herolefttitle'>CHOOSE FROM COMMON CRYPTO</h2>
      <br/>
      <Verticalline/>
      <h4 className='layerx'>LAYER 2</h4>
     
      
      <h4 className='layerx'>LAYER 1</h4>
      <h4 className='layerx'>LAYER 0</h4>
      <Icon/>
    </div>
  )
}

export default Heroleftside
