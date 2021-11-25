import {shallow} from 'enzyme'
import CounterApp from '../CounterAPP';


describe('Pruebas counter app', () => {
    let wrapper = shallow(<CounterApp/>);

    beforeEach(()=>{
         wrapper = shallow(<CounterApp/>);
    });

    test('prueba render componente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('prueba valor por defecto componente ', () => {
        const valor = 100;
        const wrapper = shallow(<CounterApp value={valor}/>)
        const valorContador = parseInt(wrapper.find('h2').text());

        expect(valor).toBe(valorContador);
    });

    test('debe incrementar contador con boton+1 ', () => {
        const valor = 10;
        wrapper.find('button').at(0).simulate('click');
        const valorContador = parseInt(wrapper.find('h2').text());
        expect(valor+1).toBe(valorContador);
    });

    test('debe incrementar contador con boton-1 ', () => {
        const valor = 10;
        wrapper.find('button').at(1).simulate('click');
        const valorContador = parseInt(wrapper.find('h2').text());
        expect(valor-1).toBe(valorContador);
    });

    test('boton reset establece valor por defecto ', () => {
        const valor = 105;
        const wrapper = shallow(<CounterApp value={valor}/>)
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        const valorContador = parseInt(wrapper.find('h2').text());
        expect(valor).toBe(valorContador);
    });


})
