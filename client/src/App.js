import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'
import './App.css'

function App() {
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