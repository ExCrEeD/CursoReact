 /** * @jest-environment node */
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import * as fs from 'fs';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { fileUpload } from '../../helpers/fileUpload';
import { types } from '../../types/types';

jest.mock('../../helpers/fileUpload',()=>({
    fileUpload:jest.fn()

}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth:{
        uid:'TESTING'
    },
    notes:{
        active:{
            id:"0yuh8M5bwxk4AkPtd7HL",
            title:"Hola",
            body:"Mundo"
        }
    },
   
}
let store = mockStore(initState);


describe('pruebas con las acciones de notes', () => {
beforeEach(()=>{
    store = mockStore(initState);
})

//   test('debe de crear una nueva nota StartNewNote', async () => {
//     await store.dispatch(startNewNote());
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//         type:types.notesActive,
//         payload:{
//             id:expect.any(String),
//             title:'',
//             body:'',
//             date:expect.any(Number)
//         }
//     });
//     expect(actions[1]).toEqual({
//         type:types.notesAddNew,
//         payload:{
//             id:expect.any(String),
//             title:'',
//             body:'',
//             date:expect.any(Number)
//         }
//     });
//     const idNote = actions[1].payload.id;
//     const noteRef = doc(db, `$TESTING/journal/notes/${idNote}`);
//     await deleteDoc(noteRef);
//   });
  
  test('startLoadingNotes debe cargar las notas',  async() => {
        await store.dispatch(startLoadingNotes('TESTING'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:types.notesLoad,
            payload:expect.any(Array)

        });
        
        const expected = {
            id:expect.any(String),
            title:expect.any(String),
            body:expect.any(String),
            date:expect.any(Number)
        }
        expect(actions[0].payload[0]).toMatchObject(expected);
  });
  
  test('debe de actualizar las notas', async() => {
     const note = {
         id:'2UTaAnCx9DtVQLMCotZK',
         title:'prueba test',
         body:'actualizando body'
     };
     await  store.dispatch(startSaveNote(note));
     const actions = store.getActions();
     expect(actions[0].type).toBe(types.notesUpdated);
     const docRef = doc(db, `TESTING/journal/notes/${note.id}`);
     const docSnap = await getDoc(docRef);
     expect(docSnap.data().title).toBe(note.title);
  });
  
  test('startUploading debe de actualizar el url del entry', async () => {
    fileUpload.mockReturnValue('https://hola-mundo.com');
    fs.writeFileSync('foto.jpg', '')
    const file = fs.readFileSync('foto.jpg')
    await store.dispatch(startUploading(file));
    const docRef = await doc(db,`/TESTING/journal/notes/${initState.notes.active.id}`);
    const docSnap = await getDoc(docRef);
    expect(docSnap.data().url).toBe('https://hola-mundo.com')
    
  });
  

});
