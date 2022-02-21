import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { LoginScreen } from "../../components/auth/LoginScreen";
import {MemoryRouter} from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

jest.mock('../../actions/auth',()=>({
    startGoogleLogin:jest.fn(),
    startLoginEmailPassword:jest.fn()
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
describe('purebas en <LoginScreen/>', () => {
  
    beforeEach(()=>{
        store = mockStore(initState);
        jest.clearAllMocks();
    });

    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter>
                <LoginScreen/>
            </MemoryRouter>
        </Provider>
    );

    test('debe de mostrarse correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });
    
    test('debe disparar la accion de startGoogleLogin', () => {
        wrapper.find('.google-btn').prop('onClick')();
        expect(startGoogleLogin).toHaveBeenCalled();
    });
    
    test('debe disparar la accion de startLogin con los respectivos argumentos', () => {
        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        expect(startLoginEmailPassword).toHaveBeenCalled();
        expect(startLoginEmailPassword).toHaveBeenLastCalledWith('proof@gmail.com','123456');

    });

});
