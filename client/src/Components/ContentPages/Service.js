import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import TableList from '../Servicess/TableList'

function Service() {
    return (
        <div>
            <Navigation title="Service" />
            <Container fluid className="content-wrapper"> 
                <TableList/>
            </Container>
        </div>
    )
}

export default Service
