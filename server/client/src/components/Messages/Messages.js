import React from 'react';

export const Messages = ({messages}) => {
    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {messages.map((u) => (
                    <li>{u.text}</li>
                ))}
            </ul>
        </div>
    )
};