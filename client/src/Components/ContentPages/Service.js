import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import TableList from '../Servicess/TableList'
import Sidebar from '../Sidebar'
import { Redirect } from 'react-router-dom'

function Service() {
    const role = sessionStorage.getItem('role');
    if (role == 1) {
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
    else {
        return (
            <Redirect to='/unauthorized' />
        )
    }
}

export default Service
