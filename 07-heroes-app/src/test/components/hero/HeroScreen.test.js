import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroScreen } from "../../../components/hero/HeroScreen";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate
}));


describe('pruebas en <HeroScreen/>', () => {
    test('no debe de mostrar el heroscreen si no hay un heroe en el url ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path='/hero' element={<HeroScreen/>} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
             </MemoryRouter>   
        );
        expect(wrapper.find('h1').text().trim()).toBe('No hero page');
    });

    test('no debe de mostrar el hero si el parametro existe ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen/>} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
             </MemoryRouter>   
        );
        expect(wrapper.find('.row').exists()).toBeTruthy();
    });

    test('debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen/>} />
                </Routes>
             </MemoryRouter>   
        );
        wrapper.find('button').prop('onClick')();
        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    test('debe de mostrar el no Hero page si no tenemos heroe ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider123123']}>
                <Routes>
                    <Route path='/hero/:heroeId' element={<HeroScreen/>} />
                    <Route path='/' element={<h1>No hero page</h1>} />
                </Routes>
             </MemoryRouter>   
        );
        expect(wrapper.text()).toBe('No hero page');
    });
    
        
    
})
