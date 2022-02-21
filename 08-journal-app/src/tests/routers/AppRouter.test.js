import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import {MemoryRouter} from 'react-router-dom'
import { login } from '../../actions/auth';
import { AppRouter } from '../../Routers/AppRouter';
import { activeNote } from '../../actions/notes';
import { act } from 'react-dom/test-utils';
import { getAuth,signInWithEmailAndPassword } from '../../firebase/firebase-config';
jest.mock('../../actions/auth',()=>({
    login:jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    ui:{
        loading:false,
        msgError:null
    },
    auth:{},
    notes:{},
   
}
let store = mockStore(initState);
store.dispatch = jest.fn();

describe('pruebas en <AppRouter/>', () => { 

    test('debe de llmar el login si estoy autenticado', async () => { 

         act(async ()=>{

            const auth = getAuth();
            const userCred = await signInWithEmailAndPassword(auth, 'test@testing.com', '123456').catch(e=>console.log(e));
            user = userCred.user;

            // const wrapper = mount(
            //     <Provider store={store}>
            //         <MemoryRouter>
            //             <AppRouter/>
            //         </MemoryRouter>
            //     </Provider>
            // );
            // expect( login ).toHaveBeenCalledWith('N7JTcWtNmiTVYdpeefAJW7ZaBgp2', null);
        });

     });
})