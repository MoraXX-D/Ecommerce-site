import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContext } from './context.js'

const userStatus = localStorage.getItem('customer_login')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserContext.Provider value={userStatus}>
        <App />
      </UserContext.Provider>
    </Router>
  </React.StrictMode>,
)
