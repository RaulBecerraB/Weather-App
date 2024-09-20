import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/containers.css'
import './styles/effects.css'
import './styles/global.css'

createRoot(document.getElementById('root')).render(<App />)
