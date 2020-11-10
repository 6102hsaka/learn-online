import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import {  Form, FormGroup, Button, Input } from 'reactstrap';

const SendMessage = ({addMessage}) => {

    const [val, setVal] = useState('')
    return (
        <Form className='mt-3'>
            <FormGroup>
                <Input type='textarea' value={val} onChange={event => setVal(event.target.value)} />
            </FormGroup>
            <Button className='float-right' onClick={() => addMessage({
                name: 'Akash',
                date: new Date().toDateString(),
                text: val
            })}>SEND <FontAwesomeIcon icon={faArrowRight}/></Button>
        </Form>
    );
}

export default SendMessage;