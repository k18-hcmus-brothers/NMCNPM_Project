import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './ContentPages/Dashboard'
import Member from './ContentPages/Member'
import Statistic from './ContentPages/Statistic'
import Room from './ContentPages/Room'
import Service from './ContentPages/Service'
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import InputItem from './Servicess/InputItem'
import Info from './Info'

function MainContent() {
    const [user, setUser] = useState();
    const [role, setRole] = useState(0);
    // setUser(localStorage.getItem('JWT'));

    const onSetUser = (newUser) => {
        setUser(newUser);
    }
    
    useEffect(() => {
        setUser(sessionStorage.getItem('JWT'));
        setRole(sessionStorage.getItem('role'));
    },[]);
    return (
        <>  
            <Switch>
                <Route exact path="/login" component={() => <Login onSetUser={onSetUser}/>} />
                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>
                {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                {/* <Route exact path="/member" component={Member} /> */}
                {/* <Route exact path="/statistic" component={Statistic} /> */}
                {/* <Route exact path="/room" component={Room} /> */}
                {/* <Route exact path="/service" component={Service}/> */}
                {/* <Route exact path='/info' component={Info} /> */}
                <ProtectedRoute exact path='/dashboard' component={Dashboard} />
                <ProtectedRoute exact path='/member' component={Member}/>
                <ProtectedRoute exact path='/statistic' component={Statistic} />
                <ProtectedRoute exact path='/room' component={Room} />
                <ProtectedRoute exact path='/service' component={Service} />
                <ProtectedRoute exact path='/info' component={Info} />
                <Route exact path="/unauthorized" component={() => <div>Unauthorized</div> }/>
                <Route exact path="/service/add" component={InputItem}/>
            </Switch>
        </>
    )
}


export default MainContent;