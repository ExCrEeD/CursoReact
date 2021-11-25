import {shallow} from 'enzyme'
import { AddCategory } from '../../Components/AddCategory'


describe('pruebas en el componente', () => {

    const setCategories=jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });

    test('debe de renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change',{target:{value}});
    });
    
    test('no debe de postear la informacion con submit ', () => {
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
    
    test('debe de llamar el setCategories y limpiar la caja de text', () => {
        const input = wrapper.find('input');
        const value = 'hola mundo';
        input.simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('')
    })
    
});
