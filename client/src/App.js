import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import SideBar from './containers/SideBar';
import React from 'react';
import About from './containers/About'
import RoomBooking from './containers/RoomBooking'

function App() {
  return (
    <Router>
      <div className="container-fluid">
      <NavBar/>
      <SideBar/>
      <Route exact path="/" component={RoomBooking}/>
      <Route path="/about" component={About}/>
      </div>
    </Router>
  );
}

export default App;
