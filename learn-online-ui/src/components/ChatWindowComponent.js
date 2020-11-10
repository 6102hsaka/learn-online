import React, { useState } from 'react';
import Message from './MessageComponent';
import SendMessage from './SendMessageComponent';



const ChatWindow = () => {
    
    const [msgs, setMsgs ] = useState([
        {
            name: 'Mr. A',
            date: '01/01/2020 8:53 PM',
            text: 'Hi'
        },
        {
            name: 'Mr. B',
            date: '01/01/2020 8:53 PM',
            text: 'Hello'
        },
        {
            name: 'Mr. A',
            date: '01/01/2020 8:53 PM',
            text: 'Whats\' up'
        },
        {
            name: 'Mr. B',
            date: '01/01/2020 8:53 PM',
            text: `I'm fine.
                What about u?`
        },
        {
            name: 'Mr. A',
            date: new Date().toDateString(),
            text: 'same bro.'
        },
    ]);

    const addMessage = newMessage => {
        setMsgs([...msgs, newMessage])
    }

    const ChatList = msgs.map(message => {
        return (
            <Message name={message.name} date={message.date} text={message.text} />
        );
    });

    return (
        <div className='container mt-3 mb-3'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 bg-secondary pb-3' style={{minHeight:'24rem', maxHeight:'24rem', overflowY:'scroll'}}>
                    {ChatList }
                    <SendMessage addMessage={addMessage} />
                </div>
            </div>
        </div>
    )
}

export default ChatWindow;