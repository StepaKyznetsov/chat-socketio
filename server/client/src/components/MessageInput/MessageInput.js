import React, {useState} from 'react';

export const MessageInput = ({sendMessage}) => {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        sendMessage(text);
        setText('');
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='Type something..'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button>
                    Type
                </button>
            </form>
        </div>
    )
};