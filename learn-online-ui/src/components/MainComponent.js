import React from 'react';
import { useSelector } from 'react-redux';

const MainComponent = () => {
    const {role, user} = useSelector(state => state)
    return (<div className="container-fluid">
        { (role!=="") && <p>Hi, {user.name}</p>}
        { (role==="") && <p>Welcome user</p> }
    </div>);
}

export default MainComponent;