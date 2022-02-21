import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('pruebas authReducer', () => {
  
  
  test('prueba login', () => {
        const user = {
            uid:123,
            displayName:'proof'
        };
        const action = {
            type:types.login,
            payload:user
        };
        const state = authReducer({},action);
        expect(state).toEqual({uid:123,name:'proof'});
  });

    test('prueba logout', () => {
        const intialState = {
            uid:123,
            name:'proof'
        };
        const action = {
            type:types.logout
        };
        const state = authReducer(intialState,action);
        expect(state).toEqual({});
    });
  
    test('prueba action no encontrada', () => {
        const initialState = {message:"xd"}
        const action = {
            type:'missedAction'
        };
        const state = authReducer(initialState,action);
        expect(initialState).toEqual(state);
    });
    
});
