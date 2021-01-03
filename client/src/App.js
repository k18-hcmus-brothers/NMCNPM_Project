import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'
import './App.css'

function App() {
  const [user, setUser] = useState();

  // setUser(localStorage.getItem('JWT'));


  return (
    <div className="wrapper">
      <Router>
        <Sidebar />
        <MainContent />
      </Router>
    </div>
  )
}

export default App;