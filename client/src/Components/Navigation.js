import React from 'react'
import styled from 'styled-components'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import '../Styles/Navigation.css'



function Navigation(props) {
  
  const history = useHistory();
  const handleLogout = (e) => {
    sessionStorage.clear();
    // history.push("/login");
  }
  const getUserInfo = (e) => {
    e.preventDefault();
    history.push('/info')
  }

  return (
    <>
      <Navbar expand="lg" className="navbar" sticky="top">
        <Navbar.Brand className="navbar-title">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto">
            <NavDropdown
              title={< ProfileImage src="/avatar.png" />}
              id="basic-nav-dropdown"
              alignRight>
              
              <NavDropdown.Item onClick={getUserInfo}>Tài khoản</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={handleLogout}>Đăng xuất</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Navigation


const ProfileImage = styled.img`
  src: ${props => props.src};
  border-radius: 10px;
  width: 30px;
  height: 30px;
`