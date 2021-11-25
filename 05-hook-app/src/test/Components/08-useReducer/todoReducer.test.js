import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en todoReducer', () => {
    test('debe de retornar el estado por defecto', () => {
       
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos);
    });
   
    test('debe de agregar un todo', () => {
       
        const newTodo =  {
            id:demoTodos.length+1,
            desc:"aprender express",
            done:false
        };
        const state = todoReducer(demoTodos,{
            type:"add",
            payload:newTodo
        });
        expect(state).toEqual([...demoTodos,newTodo]);
    });
    

    test('debe de borrar un todo', () => {
        const state = todoReducer(demoTodos,{
            type:"delete",
            payload:2
        });
        expect(state).toEqual(demoTodos.filter(x=>x.id !== 2));
    });

    test('debe de hacer el Toggle del TODO', () => {
        const state = todoReducer(demoTodos,{
            type:"toggle",
            payload:1
        });
        expect(state[0].done).toBe(true);
    });
    

});
