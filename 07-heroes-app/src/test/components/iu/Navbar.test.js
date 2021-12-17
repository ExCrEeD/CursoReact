import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate
}));

describe('pruebas en <Navbar/>', () => {

    const contextValue = {
        dispatch:mockDispatch,
        user: {
            logged: false,
            name: 'pedro'
        }
    }

    test('debe mostrarse correctamente', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
    })

    test('debe de llamar el logout, llamar navigate y dispatch con argumentos', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        wrapper.find('button').prop('onClick')();
        expect(mockDispatch).toHaveBeenCalledWith({'type':types.logout});
        expect(mockNavigate).toHaveBeenCalledWith("/marvel", {"replace": true});
    })

})
