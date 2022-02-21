import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { login, logout, startLoginEmailPassword, startLogout } from "../../actions/auth";
import { types } from "../../types/types";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth:{
        uid:'TESTING',
        name:'daniel'
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



describe('Pruebas con las acciones de auth', () => {

    beforeEach(()=>{
        store = mockStore(initState);
    });

  test('login y logout deben crear la accion respectiva', () => {
    
    const expectLogin = {
        type:types.login,
        payload:{
            uid:initState.auth.uid,
            displayName:initState.auth.name
        }
    }

    const actionLogin = login(initState.auth.uid,initState.auth.name);
    expect(actionLogin).toEqual(expectLogin);

    const actionLogout = logout();
    expect({type:types.logout}).toEqual(actionLogout);
  });

  test('debe de realizar el startLogout', async() => {
     await store.dispatch(startLogout());
     const actions = store.getActions();
     expect(actions[0]).toEqual({
         type:types.logout
     });
     expect(actions[1]).toEqual({
        type:types.notesLogoutCleaning
    });
  });
  
  test('debe de iniciar el startLoginEmailPassword', async() => {
     await store.dispatch(startLoginEmailPassword('test@testing.com','123456'));
     const actions = store.getActions();
     expect(actions[1]).toEqual({
         type:types.login,
         payload:{
             uid:'Fl1dIra5v4QwnZvAZGhlGT0drx33',
             displayName:null
         }
     })
  });
  

});


