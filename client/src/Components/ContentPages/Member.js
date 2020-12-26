import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import Role from '../Member/Role'
import ListMember from '../Member/ListMember'

function Member() {

    return (
        <div>
            <Navigation title="Member" />
            <Container fluid className="content-wrapper">

                <Role />
                <ListMember />

            </Container>
        </div>
    );
}

export default Member;