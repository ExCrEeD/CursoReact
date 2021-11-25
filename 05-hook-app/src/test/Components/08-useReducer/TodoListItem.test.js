import shallow from "enzyme/build/shallow"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe('pruebas en <TodoListItem/>', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(<TodoListItem
        task = {demoTodos[0]}
        index = {0}
        handleDelete = {handleDelete}
        handleToggle = {handleToggle}
    />);


    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de llmar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de mostrar el texto correctamente', () => {
         const p = wrapper.find('p');
         expect(p.text().trim()).toBe(`1.${demoTodos[0].desc}`);
    });
        
    test('debe de tener la clase complete', () => {

        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(<TodoListItem
            task = {todo}
            index = {0}
            handleDelete = {handleDelete}
            handleToggle = {handleToggle}
        />);
        const p = wrapper.find('p');
        expect(p.hasClass('complete')).toBe(true);
   });
       
})
