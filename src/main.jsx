import React from 'react'
import ReactDOM from 'react-dom/client'
import { CarritoDeComprasApp } from './CarritoDeComprasApp'
import { BrowserRouter } from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <CarritoDeComprasApp/>
  </React.StrictMode>,
  </BrowserRouter>
)
