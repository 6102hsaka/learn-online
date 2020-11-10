import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Form, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ROLE_TEACHER } from '../shared';
import InputError from './InputErrorComponent';
import { sendEMail } from '../redux';


const MailModal = ({isModalOpen, toogleModal}) => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
       // console.log(data);
        dispatch(sendEMail(data));
    }
    return (
        <Modal isOpen={isModalOpen} toggle={toogleModal}>
            <ModalHeader toggle={toogleModal}>
                <FontAwesomeIcon icon={faEnvelope} />
                {"    "}
                Send Mail to Students
            </ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup row>
                        <Label for="classField" sm={5}>Select class</Label>
                        <Col sm={7}>
                            <Input type="number" id="classField" name="classEnrolled" 
                                min="1" max="12" innerRef={register({required:true})} />
                            {errors.classEnrolled && <InputError msg="Field cannot be empty" /> }
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="subjectField" sm={5}>Subject</Label>
                        <Col sm={7}>
                            <Input type="text" id="subjectField" name="subject"
                                innerRef={register({required:true})} />
                            {errors.subject && <InputError msg="Field cannot be empty" /> }
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Label for="bodyField">Body</Label>
                        <Input type="textarea" id="bodyField" name="body"
                            innerRef={register({required:true})} />
                        {errors.body && <InputError msg="Field cannot be empty" /> }
                    </FormGroup>
                    <Button type="submit" color="primary" className="float-right">Send</Button>
                </Form>
            </ModalBody>
        </Modal>
    );
}


const Home = () => {
    const app = useSelector(state=>state.app);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toogleModal = () => setIsModalOpen(!isModalOpen);

    
    return (
        <div className="pb-3">
            Home Component <br/>
            {
                app.role===ROLE_TEACHER && 
                <>
                    <MailModal isModalOpen={isModalOpen} toogleModal={toogleModal} />
                    <Button onClick={toogleModal}>Send Mail</Button>
                </>
            }
            <br/>
        </div>
    )
}

export default Home;