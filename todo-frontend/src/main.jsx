import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Data from './components/data'
import Button from './components/Button/Button'
import Input from './components/Input/Input'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Input></Input>
    
    <Data/>
  </StrictMode>,
)
