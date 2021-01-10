import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../Navigation'
import Role from '../Member/Role'
import ListMember from '../Member/ListMember'
import Sidebar from '../Sidebar'
import {Redirect} from 'react-router-dom'

function Member() {
    const role = sessionStorage.getItem('role');
    if (role == 1) {
        return (
            <div className="wrapper">
                <Sidebar/>
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
        
    else  {
        return (
            <Redirect to='/unauthorized' />
        );
    }
}

export default Member;