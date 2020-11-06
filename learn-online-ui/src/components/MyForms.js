import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import { loginStudent, loginTeacher, registerTeacher, registerStudent } from '../redux';

const InputError = props => <div className="text-danger">**{props.msg}</div>

export const TeacherRegister = props => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, setError } = useForm();
    const onSubmit = data => {
        if(data.password!==data.confirm) {
            setError("confirm", {
                type: "notSame"
            })
        } else {
            dispatch(registerTeacher(data));
            props.toogleForm();
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h5><b>Teacher Registration Form</b></h5>
            <FormGroup row>
                <Label for="idField" sm={5}>Id</Label>
                <Col sm={7}>
                    <Input type="text" name="id" id="idField" innerRef={register({required:true, pattern:/T[0-9]{3}/})} />
                    {errors.id?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.id?.type==="pattern" && <InputError msg="Invalid Teacher Id" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="nameField" sm={5}>Name</Label>
                <Col sm={7}>
                    <Input type="text" name="name" id="nameField" innerRef={register({required:true, pattern:/[a-zA-Z ]{6,30}/})} />
                    {errors.name?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.name?.type==="pattern" && <InputError msg="Should contains alphabets only nad have 6-30 characters" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="ageField" sm={5}>Age</Label>
                <Col sm={7}>
                    <Input type="number" name="age" id="ageField" innerRef={register({required:true, min:25, max:60})}/>
                    {errors.age?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.age?.type==="min" && <InputError msg="Age must be greater than or equal to 25" /> }
                    {errors.age?.type==="max" && <InputError msg="Age must be lesser than or equal to 60" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="subjectField" sm={5}>Subject</Label>
                <Col sm={7}>
                    <Input type="select" name="subject" id="subjectField" innerRef={register({required:true})}>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Maths</option>
                        <option>Science</option>
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="passwordField" sm={5}>Password</Label>
                <Col sm={7}>
                    <Input type="password" name="password" id="passwordField" innerRef={register({required:true, pattern:/[a-zA-Z0-9]{8,15}/})} />
                    {errors.password?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.password?.type==="pattern" && <InputError msg="Should contains 8-15 alphanumeric characters only" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="confirmField" sm={5}>Confirm Password</Label>
                <Col sm={7}>
                    <Input type="password" name="confirm" id="confirmField" innerRef={register({required:true, pattern:/[a-zA-Z0-9]{8,15}/})} />
                    {errors.confirm?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.confirm?.type==="pattern" && <InputError msg="Should contains 8-15 alphanumeric characters only" /> }
                    {errors.confirm?.type==="notSame" && <InputError msg="Should match with password field" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="mobileNoField" sm={5}>Mobile No.</Label>
                <Col sm={7}>
                    <Input type="text" name="mobileNo" id="mobileNoField" innerRef={register({required:true, pattern:/[6789][0-9]{9}/})} />
                    {errors.mobileNo?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.mobileNo?.type==="pattern" && <InputError msg="Invalid Mobile Number" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="emailIdField" sm={5}>Email Id</Label>
                <Col sm={7}>
                    <Input type="email" name="emailId" id="emailIdField" innerRef={register({required:true})} />
                    {errors.emailId?.type==="required" && <InputError msg="Field cannot be empty" /> }
                </Col>
            </FormGroup>
            <Button type="submit" color="primary" className="float-right">Register</Button>
        </Form>
    );
}

export const StudentRegister = props => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, setError } = useForm();
    const onSubmit = data => {
        if(data.password!==data.confirm) {
            setError("confirm", {
                type: "notSame"
            })
        } else {
            dispatch(registerStudent(data));
            props.toogleForm();
        }
        console.log(data);
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h5><b>Student Registration Form</b></h5>
            <FormGroup row>
                <Label for="nameField" sm={5}>Name</Label>
                <Col sm={7}>
                    <Input type="text" name="name" id="nameField" innerRef={register({required:true, pattern:/[a-zA-Z ]{6,30}/})} />
                    {errors.name?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.name?.type==="pattern" && <InputError msg="Should contains alphabets only nad have 6-30 characters" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="classEnrolledField" sm={5}>Class</Label>
                <Col sm={7}>
                    <Input type="number" name="classEnrolled" id="classEnrolledField" innerRef={register({required:true, min:1, max:12})}/>
                    {errors.classEnrolled?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.classEnrolled?.type==="min" && <InputError msg="Class must be greater than or equal to 1" /> }
                    {errors.classEnrolled?.type==="max" && <InputError msg="Class must be lesser than or equal to 12" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="rollNumberField" sm={5}>Roll No.</Label>
                <Col sm={7}>
                    <Input type="number" name="rollNumber" id="rollNumberField" innerRef={register({required:true, min:1, max:100})}/>
                    {errors.rollNumber?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.rollNumber?.type==="min" && <InputError msg="Roll No. must be greater than 1" /> }
                    {errors.rollNumber?.type==="max" && <InputError msg="Roll No. must be lesser than 100" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="ageField" sm={5}>Age</Label>
                <Col sm={7}>
                    <Input type="number" name="age" id="ageField" innerRef={register({required:true, min:5, max:18})}/>
                    {errors.age?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.age?.type==="min" && <InputError msg="Age must be greater than or equal to 5" /> }
                    {errors.age?.type==="max" && <InputError msg="Age must be lesser than or equal to 18" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="passwordField" sm={5}>Password</Label>
                <Col sm={7}>
                    <Input type="password" name="password" id="passwordField" innerRef={register({required:true, pattern:/[a-zA-Z0-9]{8,15}/})} />
                    {errors.password?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.password?.type==="pattern" && <InputError msg="Should contains 8-15 alphanumeric characters only" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="confirmField" sm={5}>Confirm Password</Label>
                <Col sm={7}>
                    <Input type="password" name="confirm" id="confirmField" innerRef={register({required:true, pattern:/[a-zA-Z0-9]{8,15}/})} />
                    {errors.confirm?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.confirm?.type==="pattern" && <InputError msg="Should contains 8-15 alphanumeric characters only" /> }
                    {errors.confirm?.type==="notSame" && <InputError msg="Should match with password field" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="mobileNoField" sm={5}>Mobile No.</Label>
                <Col sm={7}>
                    <Input type="text" name="mobileNo" id="mobileNoField" innerRef={register({required:true, pattern:/[6789][0-9]{9}/})} />
                    {errors.mobileNo?.type==="required" && <InputError msg="Field cannot be empty" /> }
                    {errors.mobileNo?.type==="pattern" && <InputError msg="Invalid Mobile Number" /> }
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="emailIdField" sm={5}>Email Id</Label>
                <Col sm={7}>
                    <Input type="email" name="emailId" id="emailIdField" innerRef={register({required:true})} />
                    {errors.emailId?.type==="required" && <InputError msg="Field cannot be empty" /> }
                </Col>
            </FormGroup>
            <Button type="submit" color="primary" className="float-right">Register</Button>
        </Form>
    );
}

export const TeacherLogin = props => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        dispatch(loginTeacher(data));
        props.toogleForm();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h5><b>Teacher Login Form</b></h5>
            <FormGroup row>
                <Label for="idField" sm={2}>Id</Label>
                <Col sm={10}>
                    <Input type="text" name="id" id="idField" innerRef={register({required:true})} />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="passwordField" sm={2}>Password</Label>
                <Col sm={10}>
                    <Input type="password" name="password" id="passwordField" innerRef={register({required:true})} />
                </Col>
            </FormGroup>
            <Button color="primary" type="submit" className="float-right">LogIn</Button>
        </Form>
    );
}

export const StudentLogin = props => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        dispatch(loginStudent(data));
        props.toogleForm();
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <h5><b>Student Login Form</b></h5> 
            <Row>
                <Col sm={6}>
                    <FormGroup>
                        <Label for="classEnrolledField">Class</Label>
                        <Input type="number" name="classEnrolled" id="classEnrolledField" 
                            min="1" max="12" innerRef={register({required:true})}/>
                    </FormGroup>
                </Col>
                <Col sm={6}>
                    <FormGroup>
                        <Label for="rollNumberField">Roll Number</Label>
                        <Input type="number" name="rollNumber" id="rollNumberField" 
                            min="1" max="100" innerRef={register({required:true})}/>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup row>
                <Label for="passwordField" sm={2}>Password</Label>
                <Col sm={10}>
                    <Input type="password" name="password" id="passwordField" innerRef={register({required:true})} />
                </Col>
            </FormGroup>
            <Button color="primary" type="submit" className="float-right">LogIn</Button>
        </Form>
    )
}