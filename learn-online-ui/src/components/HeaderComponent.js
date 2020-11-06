import React , { useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import Login from './LoginComponent';
import Logout from './LogoutComponent';

const Header = () => {
    const {role} = useSelector(state => state)
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
                            <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>About US</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Contact US</NavLink>
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


