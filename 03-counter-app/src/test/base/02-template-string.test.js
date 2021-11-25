import { getSaludo } from "../../base/02-template-string";
import "@testing-library/jest-dom"

describe('Pruebas en 02-template', () => {
    test('prueba en el metodo gestSaludo', () => {
        const nombre = 'daniel';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre);
    })
   
    test('prueba en el metodo gestSaludo sin argumentos', () => {
        const nombre = 'Teemo';
        const saludo = getSaludo();
        expect(saludo).toBe('Hola '+nombre);
    })
})
