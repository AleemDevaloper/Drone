import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/main.css'
import Upper from './Header.jsx'
import Fotter from './Fotter.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Upper />
    <App />
    <Fotter />
  </StrictMode>,
)
