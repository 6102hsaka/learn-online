import React , { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem  } from 'reactstrap';
import Login from './LoginComponent';
import Logout from './LogoutComponent';

const Header = () => {
    const {role} = useSelector(state => state.app)
    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <header>
            <Navbar dark expand="md">
                <NavbarBrand href="/" className="font-weight-bold">Learn Online</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={collapsed} navbar >
                    <Nav navbar className="mr-auto">
                        <NavItem>
                            <NavLink className='nav-link' to='/home'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/aboutus'>
                                About US
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/teachers'>
                                Teachers
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/students'>
                                Students
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/chat'>
                                Chat
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {role==="" && <Login />}
                    {role!=="" && <Logout />}
                </Collapse>
            </Navbar>
        </header>
    )
}

export default Header;


