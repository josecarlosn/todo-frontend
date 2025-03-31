import React, { useState } from 'react'
import Button from '../Button/Button'
function Input() {
    const [inputValue, setInputValue] = useState('')
    const handleInputValue = (e) =>{
        setInputValue(e.target.value)
    }
  return (
    <>
    <input type="text" value={inputValue} onChange={handleInputValue}/>
    <Button label='Add Task' type='addButton' value={inputValue}/>
    </>
    
  )
}

export default Input