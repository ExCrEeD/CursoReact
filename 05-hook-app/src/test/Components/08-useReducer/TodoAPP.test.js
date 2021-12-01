import { act } from "@testing-library/react";
import { mount } from "enzyme";
import shallow from "enzyme/build/shallow"
import { TodoAPP } from "../../../components/08-useReducer/TodoAPP"
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas en <TodoAPP/>', () => {
    const wrapper = shallow(<TodoAPP/>);
    Storage.prototype.setItem = jest.fn(()=>{});
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agergar un TODO', () => {
        const wrapper = mount(<TodoAPP/>);
        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });
        expect(wrapper.find('h1').text().trim()).toBe('Todo APP (2)');
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    });
    
    test('debe de eliminar un todo', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('Todo APP (0)');
    });
    
    
});
