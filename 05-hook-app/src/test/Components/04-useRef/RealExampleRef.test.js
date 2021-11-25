import { shallow } from "enzyme";
import { ExampleRef } from "../../../components/04-useRef/ExampleRef";

describe('pruebas real exampleted', () => {

    var wrapper = shallow(<ExampleRef/>);

    test('debe mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
    test('debe mostrar el componente <ExampleRef/>', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
    });
    
});
