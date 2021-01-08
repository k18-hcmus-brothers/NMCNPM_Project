import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import Sidebar from '../Sidebar'

function Statistic() {
    return (
        <div className="wrapper">
            <Sidebar />
            <div>
                <Navigation title="Thống kê" />
                <Container fluid>

                </Container>
            </div>

        </div>
    );
}

export default Statistic;
