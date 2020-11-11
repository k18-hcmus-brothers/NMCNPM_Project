import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBar';
import SideBar from './containers/SideBar';
import React from 'react';
import Statistics from './pages/Statistics'
import RoomBooking from './pages/RoomBooking'
import EmployeeManagement from './pages/EmployeeManagement';
import RoomManagement from './pages/RoomManagement';
import ServicesManagement from './pages/ServicesManagement';
import "bootstrap/js/src/collapse.js";

function App() {
  return (
    <Router>
      <div className="wrapper">
      <NavBar/>
      <SideBar/>
      <Route exact path="/room-booking" component={RoomBooking}/>
      <Route path="/statistics" component={Statistics}/>
      <Route path="/employee" component={EmployeeManagement}/>
      <Route path="/room-management" component={RoomManagement}/>
      <Route path="/services" component={ServicesManagement}/>
      </div>
    </Router>
  );
}

export default App;
