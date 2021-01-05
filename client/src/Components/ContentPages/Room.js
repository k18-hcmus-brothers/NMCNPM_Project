import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import Sidebar from '../Sidebar'

function Room() {
    return (
        <div className="wrapper">
            <Sidebar />
            <div>
                <Navigation title="Phòng" />
                <Container fluid>

                </Container>
            </div>
        </div>
    );
}

export default Room;