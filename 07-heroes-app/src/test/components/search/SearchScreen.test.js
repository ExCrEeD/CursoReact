import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn();
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockNavigate
}))

describe('pruebas en <SearchScreen/>', () => {

    test('debe de mostrarse correctamente con valores por defecto ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un hero');
    })
    
    test('debe de mostrar a batman y el input con valor de query string', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen/>
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('input').prop('value')).toBe('batman');
    });

    test('debe de mostrar si no se encuentra el heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=nothero']}>
                <SearchScreen/>
            </MemoryRouter>
        );
        expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay resultados');

    })

    test('debe de llamar el navigate al nuevo url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen/>
            </MemoryRouter>
        );
        wrapper.find('input').simulate('change',{
            target:{
                name:'searchText',
                value:'batman'
            }
        });
        wrapper.find('form').prop('onSubmit')({
        preventDefault(){}
        });
        
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
    })
    
  
    
})
