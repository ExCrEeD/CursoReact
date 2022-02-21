import { db } from "../firebase/firebase-config";
import { collection, addDoc,updateDoc,doc,deleteDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
    return async ( dispatch,getState) =>{
        const {uid} = getState().auth;
        const newNote = {
            title:'',
            body:'',
            date: new Date().getTime()
        }
        
        const doc = await addDoc(collection(db,`${uid}`,'/journal/notes'),newNote);
        dispatch(activeNote(doc.id,newNote));
        dispatch(addNewNote(doc.id,newNote));
    }
}


export const activeNote = (id,note) =>({
    type:types.notesActive,
    payload:{
        id,
        ...note
    }
});

export const addNewNote = (id,note)=>({
    type:types.notesAddNew,
    payload:{
        id,...note
    }
})


export const startLoadingNotes = (uid) =>{
    return async (dispatch) =>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type:types.notesLoad,
    payload:notes
});

export const startSaveNote = (note) =>{
    return async (dipatch,getState) =>{
        const {uid} = getState().auth;
        const noteToFireStore = {...note};
        delete noteToFireStore.id;
        if(!note.url)delete noteToFireStore.url;
        

        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
        await updateDoc(noteRef,noteToFireStore);
        dipatch(refreshNote(note.id,noteToFireStore));
        Swal.fire('Saved',note.title,'success');
    }
}

export const refreshNote = (id,note) =>({
    type:types.notesUpdated,
    payload:{
        id,note:{
            id,
            ...note
        }
    }
});

export const startUploading =  (file) =>{
    return async (dispatch, getState)=>{
        const {active:activeNote} = getState().notes;
        Swal.fire({
            title:"uploading..",
            text:'Please wait..',
            allowOutsideClick:false,
            // onBeforeOpen:()=>{
            //     Swal.showLoading();
            // }
        });
        try{
            const fileURL = await fileUpload(file);
            activeNote.url = fileURL;
            dispatch(startSaveNote(activeNote))
            Swal.close();
        }catch(error){
            console.log(error);
        }
        
    }
}

export const startDeleting = (idNote) =>{
    return async (dispatch,getState) =>{
        const uid = getState().auth.uid;
        const noteRef = doc(db, `${uid}/journal/notes/${idNote}`);
        await deleteDoc(noteRef);
        dispatch(deleteNote(idNote));
    }
}

export const deleteNote = (idNote) =>({
    type:types.notesDelete,
    payload:idNote
})

export const notesLogout = () =>({
    type:types.notesLogoutCleaning
})