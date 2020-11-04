import React, { useState } from 'react';
import { Button, ButtonGroup , Modal, ModalBody, ModalHeader } from 'reactstrap';



const mystyle = {
    btnGrp : {
        backgroundColor: "#e6d8d8"
    }
}

const MyButtonGroup = props => (
    <ButtonGroup>
      <Button color=""  onClick={() => props.clickListener("TEACHER")} style={mystyle.btnGrp}>Teacher</Button>
      <Button color="" onClick={() => props.clickListener("STUDENT")} style={mystyle.btnGrp}>Student</Button>
    </ButtonGroup>
)

const MyModal = props => {
    const [role, setRole] = useState("TEACHER");

    return (
        <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
            <ModalHeader toggle={props.toggleModal}>
                <h3>{props.headerText}</h3>
                <MyButtonGroup clickListener={setRole} />
            </ModalHeader>
            <ModalBody>
                {role}
                <Button>Register</Button>
            </ModalBody>
        </Modal>
    )
}

export default MyModal;