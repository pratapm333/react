import React from 'react'
import Button from './Button'

const list = ["All", "Game", "Cricket", "Thriller", "Tseries"]
const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name={list}/>
        
    </div>
  )
}

export default ButtonList