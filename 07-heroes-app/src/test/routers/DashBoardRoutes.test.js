import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { DashBoardRoutes } from "../../routers/DashBoardRoutes"


describe('pruebas en <DashBoardRoutes/>', () => {
    const contextValue = {
        user:{
            logged:true,
            name:'daniel'
        }
    }
    test('debe de mostrarse correctamente - Marvel', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <DashBoardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe(contextValue.user.name);
    })

    test('debe de mostrarse correctamente - DC', () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/dc']}>
                    <DashBoardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Dc Screen');
    })
})
