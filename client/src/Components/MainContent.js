import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './ContentPages/Dashboard'
import Member from './ContentPages/Member'
import Statistic from './ContentPages/Statistic'
import Room from './ContentPages/Room'
import Service from './ContentPages/Service'
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

function MainContent() {
    const [user, setUser] = useState();
    // setUser(localStorage.getItem('JWT'));

    const onSetUser = (newUser) => {
        setUser(newUser);
    }
    
    useEffect(() => {
        console.log("Use Effect");
        setUser(localStorage.getItem('JWT'));
    },[]);
    return (
        <>  
            <Switch>
                <Route exact path="/login" component={() => <Login onSetUser={onSetUser}/>} />
                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>
                {/* <Route exact path="/dashboard" component={Dashboard} /> */}
                <ProtectedRoute exact path='/dashboard' user={user} component={Dashboard} />
                <Route exact path="/statistic" component={Statistic} />
                {/* <Route exact path="/member" component={Member} /> */}
                <ProtectedRoute exact path='/member' user={user} component={Member} />
                <Route exact path="/room" component={Room} />
                <Route exact path="/service" component={Service}/>
                <Route exact path="/unauthorized" component={() => <div>Unauthorized</div> }/>
            </Switch>
        </>
    )
}


export default MainContent;