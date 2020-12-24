import React from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { BsFillGridFill, BsInboxesFill, BsPersonLinesFill } from 'react-icons/bs'
import { FaChartLine } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'
import { MdRoomService } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import '../Styles/Sidebar.css'



function Sidebar() {
    return (
        <>
            <Nav className="sidebar flex-column">

                <NavLink className="nav-link" to="/">
                    <img
                        src="../../logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top mr-4">
                    </img>
                        Hotel De Luna
                    </NavLink>
                
                <NavLink className="nav-link sidebar-item mt-5" to="/dashboard"><BsFillGridFill className="mr-4"/>Tình trạng phòng</NavLink>
                <NavLink className="nav-link sidebar-item" to="/statistic"><FaChartLine className="mr-4" />Thống kê</NavLink>
                <NavDropdown title={<span className="mr-2 "><BsInboxesFill className="dropdown-title-icon" /> Quản lý</span>} id="nav-dropdown">
                    
                <NavLink className="nav-link sidebar-item" to="/room"><ImHome className="mr-4" />Phòng</NavLink>
                    
                <NavLink className="nav-link sidebar-item" to="/service"><MdRoomService className="mr-4" />Dịch Vụ</NavLink>
                    
                <NavLink className="nav-link sidebar-item" to="/member"><BsPersonLinesFill className="mr-4" />Nhân viên</NavLink>
                </NavDropdown>


            </Nav>
        </>
    )
}


export default Sidebar
