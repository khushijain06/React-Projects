import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Load from './components/Load.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Load/>
  </StrictMode>,
)
