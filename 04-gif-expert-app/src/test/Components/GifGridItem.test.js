import {shallow} from 'enzyme'
import { GifGridItem } from '../../Components/GifGridItem';

describe('pruebas gifgriditem', () => {
    let wrapper = shallow(<GifGridItem/>);
    const title = 'un titulo';
    const url= 'https;//localhots/prueba.jpg';
    const className = 'animate__fadeInDown';
    beforeEach(()=>{
        wrapper = shallow(<GifGridItem title={title} url={url}/>);
    });


    test('prueba renderizando componente ', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de tener un parrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find('div');
        expect(div.prop('className')).toContain(className);
    });
    
    
    
    
})
