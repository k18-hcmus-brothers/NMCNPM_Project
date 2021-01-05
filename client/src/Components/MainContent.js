import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './ContentPages/Dashboard'
import Member from './ContentPages/Member'
import Statistic from './ContentPages/Statistic'
import Room from './ContentPages/Room'
import Service from './ContentPages/Service'
import InputItem from './Servicess/InputItem'

function MainContent() {
    return (
        <>  
            <Switch>
                <Route exact path="/">
                    <Redirect to="/dashboard" />
                </Route>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/statistic" component={Statistic} />
                <Route exact path="/member" component={Member} />
                <Route exact path="/room" component={Room} />
                <Route exact path="/service" component={Service}/>
                <Route exact path="/service/add" component={InputItem}/>
            </Switch>
        </>
    )
}


export default MainContent;