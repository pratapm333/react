import React from 'react'

const Button = ({name}) => {
     
  return (
    <div>
        <ul>
        {name.map((value,index)=>(  <button className='px-5 py-2 m-5 rounded-full bg-gray-200'>
        <li key={index}>{value}</li></button> ))}
      
        </ul>
    </div>
  )
}

export default Button