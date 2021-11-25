
import { renderHook,act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('pruebas en useForm', () => {
    const initialForm = {
        name:'daniel',
        email:'proof@email.com'
    };

    test('debe de regresar un formulario por defecto ', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [values,handleInputChange,reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toEqual('function');
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [,handleInputChange] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'proof'
                }
            })

        })
        const [values] = result.current;
        expect(values).toEqual({...initialForm,name:'proof'});
    });
    
    test('debe de re-establecer el formulario con RESET ', () => {
        const {result} = renderHook(()=> useForm(initialForm));
        const [,handleInputChange,reset] = result.current;

        act(()=>{
            handleInputChange({
                target:{
                    name:'name',
                    value:'proof'
                }
            });
            reset();
        })
        const [values] = result.current;
        expect(values).toEqual(initialForm);
    });
    
    

});
