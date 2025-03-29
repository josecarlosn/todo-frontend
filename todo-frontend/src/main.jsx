import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Data from './components/data'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Data/>
  </StrictMode>,
)
