import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './Components/Card/Header/Header.jsx'
import { CardP } from './Components/Card/CardP.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CardP/> 
  </React.StrictMode>,
)
