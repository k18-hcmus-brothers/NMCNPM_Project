import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
    return (
        <Route {...rest} render = {
            props => {
                if (sessionStorage.getItem('JWT')) {
                        return <Component {...rest} {...props}/>
                } else {
                    return <Redirect to={
                        {
                            pathname: '/login'
                        }
                    } />
                }
            }
        } />
    )
}

export default ProtectedRoute;