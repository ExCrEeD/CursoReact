import {AppRouter} from '../../routers/AppRouter'
import {mount} from 'enzyme';
import { AuthContext } from '../../auth/authContext';

describe('pruebas en <AppRouter/>', () => {
    
   

    test('debe de mostar el login si el usuario no esta logeado', () => {
        const contextValue = {
            user:{
                logged:false
            }
        };
        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <AppRouter/>
        </AuthContext.Provider>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');
    });


    test('debe de mostar el componente de marvael si el usuario esta logeado', () => {
        const contextValue = {
            user:{
                logged:true,
                name:'daniel'
            }
        };
        const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <AppRouter/>
        </AuthContext.Provider>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBeTruthy();
    });
    

})
