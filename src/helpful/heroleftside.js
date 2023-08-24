import React from 'react'
import './heroleftside.css'
import Verticalline from './Verticalline'
import Icon from './icon'


const Heroleftside = () => {
  return (
    <div className='hero-side'>
      <h2 className='herolefttitle'>CHOOSE FROM COMMON CRYPTO</h2>
      <br/>
      <Verticalline/>
      <h4 className='layer2'>LAYER 2</h4>
     
      
      <h4 className='layer1'>LAYER 1</h4>
      <h4 className='layer0'>LAYER 0</h4>
      <h4 className='layer-gaming'>GAMING</h4>
      <h4 className='layer-memes'>MEMES</h4>
      <h4 className='layer-defi'>DEFI</h4>
      <Icon/>
    </div>
  )
}

export default Heroleftside
