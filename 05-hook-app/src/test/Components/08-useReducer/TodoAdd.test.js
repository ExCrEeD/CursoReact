import shallow from "enzyme/build/shallow"
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd"

describe('pruebas en <TodoAdd/>', () => {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd
        handleAddTodo = {handleAddTodo} 
        />

    );
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('no debe de llamar handleAddTodo ', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar la funcion handleAddTodo', () => {
        const value = 'Aprender react'
        const handleInputChange = wrapper.find('input').prop('onChange');
        handleInputChange({
            target:{
                value,
                name:'description'
            }
        });
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault:()=>{}});
        expect(handleAddTodo).toHaveBeenCalled();
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc:value,
            done:false,
            id:expect.any(Number)
        });
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
})
