import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Form, FormGroup, Button, Input } from 'reactstrap';
import { connect } from 'react-redux';
import SockJsClient from 'react-stomp';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return {
      currentUser: state.app.user
    }
}

const mapDispatchToProps = dispatch => ({
    
});

class SendMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.currentUser,
            val: ''
        };
    }

    setVal = newVal => {
        this.setState({
            val: newVal
        })
    }

    onClickHandler = event => {
        event.preventDefault();
        const obj = {
            userId: this.state.user.id,
            username : this.state.user.name,
            date: new Date(),
            message: this.state.val
        };
        
        try {
            this.clientRef.sendMessage("/app/all", JSON.stringify(obj));
            this.setVal(' ');
            return true;
        } catch(e) {
            return false;
        }  
    }

    render() {
        return (
            <>
                <SockJsClient url='http://localhost:8080/chat' topics={['/topic/all']}
                    onMessage={(msg) => { console.log('sent: '+JSON.stringify(msg)); }}
                    ref={ (client) => { this.clientRef = client }} />
                <Form className='mt-3'>
                    <FormGroup>
                        <Input type='textarea' value={this.val} onChange={event => this.setVal(event.target.value)} />
                    </FormGroup>
                    <Button className='float-right' onClick={this.onClickHandler}>SEND <FontAwesomeIcon icon={faArrowRight}/></Button>
                </Form>
            </>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SendMessage));