import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, user, role, ...rest }) => {
    return (
        <Route {...rest} render = {
            props => {
                if (user) {
                        return <Component {...rest} {...props} role={role}/>
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