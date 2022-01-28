import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router,Switch,Route,Redirect } from "react-router-dom";
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsloggedIn] = useState(false);

    useEffect(() => {
        getAuth().onAuthStateChanged(async (user)=>{
            if(user?.uid){
                dispatch(login(user.uid,user.displayName));
                setIsloggedIn(true);
                dispatch(startLoadingNotes(user.uid));
                
            }
            else{
                setIsloggedIn(false)
            }
            setChecking(false);
        });

    }, [setChecking,setIsloggedIn,dispatch])

    if(checking){
        return (<h1>Wait..</h1>)
    }

    return (
        <Router>
            <div>
                <Switch>
                    {
                        isLoggedIn ? (
                            <>
                                <Route 
                                   path="/"
                                   component={JournalScreen}
                                />
                            </>
                        ):(
                            <>
                                 <Route 
                                    path="/auth"
                                    component={AuthRouter}
                                />
                                <Redirect to="/auth/login"/>
                            </>
                        )
                    }
                  
                   
                </Switch>
                
            </div>
        </Router>
    )
}
