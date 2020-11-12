import React from 'react';
import Message from './MessageComponent';
import SendMessage from './SendMessageComponent';
import SockJsClient from 'react-stomp';
import { loadMessages } from '../redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      currentUser: state.app.user,
      chat: state.chat
    }
}

const mapDispatchToProps = dispatch => ({
    loadMessage: () => dispatch(loadMessages())
});

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }

    componentDidMount() {
        this.props.loadMessage();
    }

    setMessages = newMessage => {
        this.setState({
            messages: [...this.state.messages, newMessage]
        })
    }

    render() {    
        if(!this.props.chat.isLoading && this.props.chat.messages.length!==0 && this.state.messages.length===0) {
            this.setState({
                messages: this.props.chat.messages
            })
        }
        const ChatList = this.state.messages.map(message => {
            const datetime = new Date(message.date).toDateString()+" "+new Date(message.date).toLocaleTimeString();
            return (
                <Message key={message.id} name={message.username} date={datetime} text={message.message} />
            );
        });
        
        return (
            <div className='container mt-3 mb-3'>
                <SockJsClient url='http://localhost:8080/chat' topics={['/topic/all']}
                    onMessage={(msg) => { console.log('received:' +msg); this.setMessages(msg); }}
                    ref={ (client) => { this.clientRef = client }} />
                <div className='row'>
                    <div className='col-md-6 offset-md-3 bg-secondary pb-3' style={{minHeight:'24rem', maxHeight:'28rem', overflowY:'scroll'}}>
                        <h4 className='pt-2 pb-2' style={{color:'whitesmoke'}}>Chat With US</h4>
                        {ChatList }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 bg-secondary pb-3'>
                        <SendMessage />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatWindow));