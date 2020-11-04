import React, { useState } from 'react';
import { Button, Nav,  NavItem } from 'reactstrap';
import MyModal from './MyModalComponent';


const Login = () => {
    
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
    const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

    const toogleSignUpModal = () => setIsSignUpModalOpen(!isSignUpModalOpen);
    const toogleSignInModal = () => setIsSignInModalOpen(!isSignInModalOpen);

    return (
     <> 
        <MyModal headerText="Sign Up" isModalOpen={isSignUpModalOpen} toggleModal={toogleSignUpModal} />
        <MyModal headerText="Sign In" isModalOpen={isSignInModalOpen} toggleModal={toogleSignInModal} />

        <Nav navbar>
            <NavItem>
                <Button className="btn-light mr-5 mt-1" onClick={toogleSignUpModal}>Sign Up</Button>
            </NavItem>
            <NavItem>
                <Button  className="btn-light mr-3 mt-1" onClick={toogleSignInModal}>Sign In</Button>
            </NavItem>
        </Nav>
     </>   
    )
}

export default Login;