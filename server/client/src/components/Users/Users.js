import React from 'react';

export const Users = ({users}) => {
    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(({ userId, userName }) => (
                    <li key={userId}>{userName}</li>
                ))}
            </ul>
        </div>
    )
};