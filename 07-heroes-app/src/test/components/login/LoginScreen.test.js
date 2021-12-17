import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate
}));


describe('Purbeas en <LoginScreen/>', () => {
    
    const contextValue = {
        dispatch:mockDispatch,
        user: {
            logged: false
        }
    }


    test('debe de hacer match con el snapshot', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <LoginScreen />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('debe de realizar el dispatch y la navegacion',()=>{
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <LoginScreen />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const handleClick =wrapper.find('button').prop('onClick');
        handleClick();
        expect(mockDispatch).toHaveBeenCalledWith({"payload": {"name": "daniel"}, "type": types.login});
        expect(mockNavigate).toHaveBeenCalledWith("/marvel", {"replace": true});
        localStorage.setItem('lastPath','/dc');
        handleClick();
        expect(mockNavigate).toHaveBeenCalledWith("/dc", {"replace": true});

    });

});
