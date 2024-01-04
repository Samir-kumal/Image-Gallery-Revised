import React from 'react'

interface ButtonProps{
    handleClick: ()=>void
    children:React.ReactNode
    
}

const Button:React.FC<ButtonProps> = ({handleClick, children}) => {
  return (
    <button className='bg-white p-2 ' onClick={handleClick}>
        {children}
    </button>
  )
}

export default Button