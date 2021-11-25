import { GifGrid } from "../../Components/GifGrid";
import {shallow} from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('pruebas GifGrid', () => {
  
    let category = 'HunterXHunter';
    test('debe de renderizar el componente', () => {
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });
        let wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de mostar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs =[{
            id:'ABC',
            url:'https://adksadl/asdas.jpg',
            title:'Cuaqlueir cosa'
        },
        {
            id:'123',
            url:'https://adksadl/asdas.jpg',
            title:'prueab 2'
        }]

        useFetchGifs.mockReturnValue({
            data:gifs,
            loading:false
        });
        let wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
    
});
