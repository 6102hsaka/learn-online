import React, { useState } from 'react';
import { Button, ButtonGroup , Modal, ModalBody, ModalHeader } from 'reactstrap';
import { StudentLogin, StudentRegister, TeacherLogin, TeacherRegister } from './MyForms';



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
                <span className="pr-5">{props.headerText}</span>
                <MyButtonGroup clickListener={setRole} />
            </ModalHeader>
            <ModalBody>
                {(props.headerText==="Sign Up" && role==="TEACHER" && <TeacherRegister toogleForm={props.toggleModal} />)}
                {(props.headerText==="Sign Up" && role==="STUDENT" && <StudentRegister toogleForm={props.toggleModal} />)}
                {(props.headerText==="Sign In" && role==="TEACHER" && <TeacherLogin toogleForm={props.toggleModal} />)}
                {(props.headerText==="Sign In" && role==="STUDENT" && <StudentLogin toogleForm={props.toggleModal} />)}
            </ModalBody>
        </Modal>
    )
}

export default MyModal;