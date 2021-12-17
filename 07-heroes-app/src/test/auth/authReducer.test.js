import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"

describe('pruebas en authReducer', () => {

    test('debe de retornar el estado por defecto', () => {
        
        const init = {logged:false};
        const state = authReducer(init,{});
        expect(state).toEqual(init);
    })

    test('debe de autenticar y colocar el "name" del usuario', () => {
        const action = {
            type:types.login,
            payload:{
                name:'daniel'
            }
        }

        const state = authReducer({logged:false},action);
        expect(state).toEqual({logged:true,name:action.payload.name});
    })

    test('debe de borrar el name del usario y log en false', () => {
        const action = {type:types.logout}
        const state = authReducer({logged:true,name:'daniel'},action);
        expect(state).toEqual({logged:false});
    })
    
    
})
