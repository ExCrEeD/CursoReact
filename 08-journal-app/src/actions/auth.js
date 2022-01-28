import Swal from "sweetalert2";
import { googleAuthProvider,getAuth,signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "../firebase/firebase-config";
import { types } from "../types/types"
import { notesLogout } from "./notes";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                dispatch(
                    login( user.uid, user.displayName )
                );
                dispatch(finishLoading());
            })
            .catch((error) => {
                dispatch(finishLoading());
                Swal.fire('Error','User not found, wrong email or password','error');
            });
    };
};

export const RegisterWithEmailAndPassword = (email,password,name) =>{
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
            .then( async ({user}) =>{
                await updateProfile(user, { displayName: name });
                dispatch(login(user.uid,user.displayName))
            }).catch(e=>{
                Swal.fire('Error',e.message,'error');
            })
    }
}

export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup( auth, googleAuthProvider )
        .then( ({ user }) => {
            dispatch(
                login( user.uid, user.displayName )
            )
        });
    }
}

export const login = (uid,displayName) =>({
    type:types.login,
    payload:{
        uid,
        displayName
    }
});


export const startLogout = () => {
    return async (dispatch) =>{
        const auth = getAuth();
        await auth.signOut();
        dispatch(logout());
        dispatch(notesLogout());
    }
}

export const logout = () => ({
    type:types.logout
})
