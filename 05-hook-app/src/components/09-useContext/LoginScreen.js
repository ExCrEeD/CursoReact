import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
    const {setUser} = useContext(UserContext);
    const usr = {
        id: 123,
        name:'daniel'
    }
    return (
        <div>
            <h1>login screen</h1>
            <button
                className="btn btn-primary"
                onClick={()=> setUser(usr)}
            >
                Login
            </button>
        </div>
    )
}
