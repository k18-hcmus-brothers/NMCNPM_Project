import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Nav, NavDropdown } from 'react-bootstrap'

import { MdRoomService } from 'react-icons/md'
import { RiBarChartFill } from 'react-icons/ri'
import { IoIosPeople, IoIosWallet } from 'react-icons/io'
import { BsInboxesFill, BsPersonLinesFill, BsFillGridFill } from 'react-icons/bs'
import { FaChartLine } from 'react-icons/fa'
import { ImHome } from 'react-icons/im'

import '../Styles/Sidebar.css'

function Sidebar() {
    const [show, setShow] = useState(true)

    const dropdownToggle = (isShow, event, {source}) => {
        if (source === "click") 
            setShow(isShow)
    }

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

                <NavLink className="nav-link sidebar-item mt-5" to="/dashboard"><BsFillGridFill className="mr-4" />Tình trạng phòng</NavLink>
                <NavLink className="nav-link sidebar-item" to="/statistic"><FaChartLine className="mr-4" />Thống kê</NavLink>
                <NavDropdown show={show} onToggle={dropdownToggle} title={<span className="mr-2 "><BsInboxesFill className="dropdown-title-icon" /> Quản lý</span>} id="nav-dropdown">

                    <NavLink className="nav-link sidebar-item" to="/room"><ImHome className="mr-4" />Phòng</NavLink>

                    <NavLink className="nav-link sidebar-item" to="/service"><MdRoomService className="mr-4" />Dịch Vụ</NavLink>

                    <NavLink className="nav-link sidebar-item" to="/member"><BsPersonLinesFill className="mr-4" />Nhân viên</NavLink>
                </NavDropdown>
            </Nav>
        </>
    )
}


export default Sidebar
