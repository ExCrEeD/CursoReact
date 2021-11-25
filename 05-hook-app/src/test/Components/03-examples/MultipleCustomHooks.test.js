import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks"
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");

describe('pruebas en multipleCustomHooks', () => {
    test('debe de mostarse correctamente ', () => {
        useFetch.mockReturnValue({
            data:null,
            loading:true,
            error:null
        });
        const wrapper = shallow(<MultipleCustomHooks/>)
        expect(wrapper).toMatchSnapshot();
    });

    test('should debe de mostar la informacion',()=>{
        useFetch.mockReturnValue({
            data:[{
                author:'daniel',
                quote:'Hola mundo'
            }],
            loading:false,
            error:null
        });
        const wrapper = shallow(<MultipleCustomHooks/>);
        console.log(wrapper.html());
        const loadingExist = wrapper.find('.alert').exists();
        expect(loadingExist).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect(wrapper.find('footer').text().trim()).toBe('daniel');
    })
    
    
})
