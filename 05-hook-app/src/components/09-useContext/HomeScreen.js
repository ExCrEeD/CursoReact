import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>Home screen</h1>
            <pre>
                {JSON.stringify(user,null,3)}
            </pre>
        </div>
    )
}
