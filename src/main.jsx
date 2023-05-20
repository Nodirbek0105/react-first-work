import React from 'react'
import ReactDOM from 'react-dom/client'
import "./bootstrapt.css"
import './index.scss'
import App from './app'
import { RouterProvider } from 'react-router-dom'
import router from './services/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router}/> */}
    
  </React.StrictMode>,
)
