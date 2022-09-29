import { SERVER_URL, USER } from '../constants';
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import storage from '../utils/storage';

export default function useChat() {

    const user = storage.get(USER);

    const [users, setUsers] = useState([]);
    const [messages, setMessages] = useState([]);

    const { current: socket } = useRef(
        io(SERVER_URL, {
            query: {
                roomId: user.roomId,
                userName: user.userName
            }
        })
    );

    useEffect(() => {
        socket.emit('user_list:add', user);

        socket.emit('message_list:get');

        socket.on('user_list:update', (users) => {
            setUsers(users);
        });

        socket.on('message_list:update', (messages) => {
            setMessages(messages);
        })
    }, []);

    const sendMessage = (message) => {
        socket.emit('message_list:add', message);
    }

    const logout = () => {
        storage.set(USER, '');
        window.location.reload();
    }

    return { users, messages, sendMessage, logout };
}