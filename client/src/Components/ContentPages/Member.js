import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import Role from '../Member/Role'
import ListMember from '../Member/ListMember'
import Sidebar from '../Sidebar'

function Member() {

    return (
        <div className="wrapper">
            <Sidebar />
            <div>
                <Navigation title="Nhân viên" />
                <Container fluid className="content-wrapper">
                    <Role />
                    <ListMember />
                </Container>
            </div>

        </div>
    );
}

export default Member;