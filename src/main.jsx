import React from 'react'
import ReactDOM from 'react-dom/client'
import "./bootstrapt.css"
import Header from './components/header/header'
import Main from "./components/main/tana"
import Footer from "./components/footer/footer"
import Todo from "./components/todo/todo"
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header />
    <Main />
    <Footer /> */}
    <Todo/>
  </React.StrictMode>,
)
