import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import Sidebar from '../Sidebar'
import ListRoom from '../Room/ListRoom'
import { Redirect } from 'react-router-dom'

function Room() {
    const role = sessionStorage.getItem('role');
    if (role == 1) {
        return (
            <div className="wrapper">
                <Sidebar />
                <div>
                    <Navigation title="Phòng" />
                    <Container fluid>
                        <ListRoom/>
                    </Container>
                </div>
            </div>
        );
    }
    else {
        return (
            <Redirect to='/unauthorized' />
        );
    }

}

export default Room;