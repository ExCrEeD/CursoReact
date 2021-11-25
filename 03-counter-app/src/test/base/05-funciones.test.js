import {getUser,getUsuarioActivo} from '../../base/05-funciones'
describe('pruebas en 05 funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();
        expect(user).toEqual(userTest);
    })

    test('getUserActivo debe taraer username', () => {
        const name = 'Teemo';
        const userTest = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name);
        expect(user).toEqual(userTest);
    })
    
})
