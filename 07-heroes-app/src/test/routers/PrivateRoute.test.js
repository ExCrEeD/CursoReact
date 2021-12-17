import { mount } from "enzyme"
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from "../../auth/authContext";
import { PrivateRouter } from "../../routers/PrivateRouter";


jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    Navigate:()=><span>saliendo de aqui</span>
}));
describe('preubas en <PrivateRouter/>', () => {

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si esta autenticado y guardar en localStorage ', () => {
        
        const contextValue = {
            user:{
                logged:true,
                name:'el pepe'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRouter>
                        <h1>private component</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
            
        );
        expect(wrapper.text()).toBe('private component');
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/");
    });

    test('debe de bloquear el componente si no esta autenticado', () => {
        const contextValue = {
            user:{
                logged:false
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRouter>
                        <h1>private component</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
            
        );
        expect(wrapper.text()).toBe('saliendo de aqui');
    })
    
    
})
