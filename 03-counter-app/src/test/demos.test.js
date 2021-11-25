
describe('pruebas',()=>[
    test('deben de ser iguales los strings', () => {
        const mensaje = 'hola mundo';
        const mensaje2 = `hola mundo`;
    
        expect(mensaje).toBe(mensaje2);
       
    })    
])    

