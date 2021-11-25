import { useFetchGifs } from "../../hooks/useFetchGifs";
import {renderHook} from '@testing-library/react-hooks';

describe('pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {
        
        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs('one pice'));
        const {data,loading} = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();
    });
    
    test('debe retornar un arreglo de img y el loadign en false ', async() => {
        const {result,waitForNextUpdate} = renderHook(()=> useFetchGifs('one pice'));
        await waitForNextUpdate();
        const {data,loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
    
});
