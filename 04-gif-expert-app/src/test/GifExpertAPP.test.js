import {shallow} from 'enzyme'
import { GifExpertAPP } from '../GifExpertAPP';

describe('pruebas GifExpertAPP', () => {
    let wrapper = shallow(<GifExpertAPP />);
    test('debe de renderizar el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostar una lista de categorias', () => {
        
        const categories = ['one piece','naruto'];
        let wrapper = shallow(<GifExpertAPP defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    

});
