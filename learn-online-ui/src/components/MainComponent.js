import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import ChatWindow from './ChatWindowComponent';
import Home  from './HomeComponent';
import About from './AboutUsComponent';
import Students from './Students';
import Teachers from './Teachers';

const MainComponent = () => {
    const {role, user} = useSelector(state => state.app)
    return (<div className="container-fluid" style={{minHeight:'50vh'}}>
        { (role!=="") && <p>Hi, {user.name}</p>}
        { (role==="") && <p>Welcome to our site</p> }
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/aboutus' component={About} />
            <Route path='/teachers' component={Teachers} />
            <Route path='/students' component={Students} />
            <Route path='/chat'> 
                { (role==="") ? <Redirect to='/home' /> : <ChatWindow /> }
            </Route>
        </Switch>        
    
    </div>);
}

export default MainComponent;