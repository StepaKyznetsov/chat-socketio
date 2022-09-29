import React from 'react';
import useChat from '../../hooks/useChat';
import {Users} from "../Users/Users";
import {Messages} from "../Messages/Messages";
import {MessageInput} from "../MessageInput/MessageInput";

export const ChatRoom = () => {

    const { messages, users, logout, sendMessage } = useChat();

    return (
        <div>
            <Users users={users} />
            <MessageInput sendMessage={sendMessage} />
            <Messages messages={messages} />
            <button onClick={logout}>logout</button>
        </div>
    )
};