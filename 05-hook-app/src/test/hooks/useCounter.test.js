import { renderHook,act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe('preubas en useCounter', () => {

    test('debe de retornar valores por defecto ', () => {
        const {result} = renderHook(()=> useCounter());
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
        
    });

    test('debe de asignar valor a 100 ', () => {
        const {result} = renderHook(()=> useCounter(100));
        expect(result.current.counter).toBe(100);
    });
    
    test('debe de incrementar el counter en 1', () => {
        const {result} = renderHook(()=> useCounter(100));
        const {increment} =  result.current;
        act(()=>{
            increment();
        });
        const {counter} =  result.current;
        expect(counter).toBe(101);
    });

    test('debe de incrementar el counter en -1', () => {
        const {result} = renderHook(()=> useCounter(100));
        const {decrement} =  result.current;
        act(()=>{
            decrement();
        });
        const {counter} =  result.current;
        expect(counter).toBe(99);
    });

    test('debe resetear el valor inicial', () => {
        const init = 100;
        const {result} = renderHook(()=> useCounter(init));
        const {decrement,reset} =  result.current;
        act(()=>{
            decrement();
            reset();
        });
        const {counter} =  result.current;
        expect(counter).toBe(init);
    });
});
