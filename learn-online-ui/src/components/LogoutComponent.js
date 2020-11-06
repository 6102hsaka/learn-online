import React from 'react';
import { studentLogout, teacherLogout } from '../redux';
import { ROLE_TEACHER } from '../shared';
import { useSelector, useDispatch } from 'react-redux';
import { Nav, NavItem, Button } from 'reactstrap';

const Logout = () => {
    const dispatch = useDispatch();
    const {role} = useSelector(state => state);

    const handleClick = () => {
        if(role===ROLE_TEACHER) {
            dispatch(teacherLogout());
        }
        else {
            dispatch(studentLogout());
        }
    }

    return (
        <Nav navbar>
            <NavItem>
                <Button className="btn-light mr-5 mt-1" onClick={handleClick}>Logout</Button>
            </NavItem>
        </Nav>
    )
}

export default Logout;