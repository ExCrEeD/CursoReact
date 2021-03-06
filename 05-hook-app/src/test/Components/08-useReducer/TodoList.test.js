import shallow from "enzyme/build/shallow"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos"


describe('pruebas en todolist', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
    <TodoList 
        todos={demoTodos}
        handleDelete = {handleDelete}
        handleToggle ={handleToggle}
    />);


    test('debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener dos <TodoListItem/>', () => {
       expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
       expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    
    });
    
    
})
