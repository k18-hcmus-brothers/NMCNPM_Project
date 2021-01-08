import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import TableList from '../Servicess/TableList'
import Sidebar from '../Sidebar'

function Service() {
    return (
        <div className="wrapper">
            <Sidebar />
            <div>
                <Navigation title="Dịch vụ" />
                <Container fluid className="content-wrapper">
                    <TableList />
                </Container>
            </div>

        </div>
    )
}

export default Service
