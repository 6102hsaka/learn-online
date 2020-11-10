import React from 'react';

const Message = props => {
    return (
        <div className='container mt-3 msg-box' >
            <div className='row'>
                <div className='col-12'>
                    <strong> {props.name}</strong>
                </div>

                <div className='col-12'>
                    <small className='text-muted'>{props.date}</small> <br/>
                </div>

                <div className='col-12'>
                    {props.text}
                </div>

            </div>
        </div>
    );
}

export default Message;