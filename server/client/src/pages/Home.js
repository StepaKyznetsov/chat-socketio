import React from 'react';
import {UserInput} from "../components/UserInput/UserInput";
import storage from "../utils/storage";
import {USER} from "../constants";
import {ChatRoom} from "../components/ChatRoom/ChatRoom";

export const Home = () => {

    const user = storage.get(USER);

    return (
        <div>
            {user ?
                <ChatRoom />
                :
                <UserInput />
            }
        </div>
    )
};
