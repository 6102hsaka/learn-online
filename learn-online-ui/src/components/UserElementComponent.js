import React from 'react';
import { Card, Row, Col } from 'reactstrap';
import { ROLE_STUDENT, ROLE_TEACHER } from '../shared';

const UserElement = props => (
    <Card className='m-3 p-3'>
        <Row>
            <Col>
                Name : {props.element.name}
            </Col>
        </Row>
        {
            props.type===ROLE_TEACHER &&
            <Row>
                <Col>
                    Subject: {props.element.subject}
                </Col>
            </Row>
        }
        {
            props.type===ROLE_STUDENT && 
            <Row>
                <Col xs={6}>
                    Class: {props.element.classEnrolled}
                </Col>
                <Col xs={6}>
                    Roll No.: {props.element.rollNumber}
                </Col>
            </Row>
        }
        <Row>
            <Col>
                Age: {props.element.age}
            </Col>
        </Row>
        <Row>
            <Col>
                Mobile No.: {props.element.mobileNo}
            </Col>
        </Row> 
        <Row>
            <Col>
                Email Id: {props.element.emailId}
            </Col>
        </Row>
    </Card>
)

export default UserElement;