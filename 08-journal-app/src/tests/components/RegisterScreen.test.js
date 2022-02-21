import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import {MemoryRouter} from 'react-router-dom'
import { RegisterScreen } from '../../components/auth/RegisterScreen';
import { types } from '../../types/types';

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
//store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <RegisterScreen/>
        </MemoryRouter>
    </Provider>
);
describe('pruebas en <RegisterScreen/>', () => {
   

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe hacer el dispatch de la accion respectiva', () => {
       const emailField = wrapper.find('input[name="email"]');
       emailField.simulate('change',{
           target:{
               value:'',
               name:'email'
           }
       });

       wrapper.find('form').simulate('submit',{
           preventDefault(){}
       })

       const actions = store.getActions();
       expect(actions[0]).toEqual({
           type:types.uiSetError,
           payload:'email no es valido'
       })
    });
    
   test('debe de mostrar la caja de alerta con el error', () => { 
        const initState = {
            auth:{},
            ui:{
                loading:false,
                msgError:'email no es correcto'
            }
        } 
        
        const store = mockStore(initState);
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter>
                    <RegisterScreen/>
                </MemoryRouter>
            </Provider>
        );

        expect(wrapper.find('.auth__alert-error').exists()).toBeTruthy();
        expect(wrapper.find('.auth__alert-error').text().trim()).toBe(initState.ui.msgError);
    }) 
});
