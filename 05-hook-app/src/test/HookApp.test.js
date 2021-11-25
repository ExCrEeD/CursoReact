import { shallow } from "enzyme";
import { HookAPP } from "../HookAPP";

describe('prueba hook app', () => {
    test('debe renderizar el componente ', async () => {
        let wrapper = shallow(<HookAPP/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})
