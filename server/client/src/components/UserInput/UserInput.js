import React, {useState} from 'react';
import storage from '../../utils/storage';
import {USER} from "../../constants";

export const UserInput = () => {

    const [formData, setFormData] = useState({
        userName: '',
        roomId: 'main'
    });

    const onChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const userId = Math.round(Math.random() * 1e9);
        storage.set(USER, {
            userId,
            userName: formData.userName,
            roomId: formData.roomId
        })
        window.location.reload();
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    id='userName'
                    name='userName'
                    value={formData.userName}
                    onChange={onChange}
                />
                <button>
                    submit
                </button>
            </form>
        </div>
    )
};