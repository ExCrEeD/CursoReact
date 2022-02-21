import { types } from "../../types/types"

describe('prueba del archivo types', () => {
  test('Todos los types a usar se encuentran', () => {
    
    var typesEsperados = {
        login:'[Auth] Login',
        logout:'[Auth] Logout',
    
        uiSetError:"[UI] Set Error",
        uiRemoveError:"[UI] Remove Error",
    
        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',
    
        notesAddNew:'[Notes] New note',
        notesActive:'[Notes] Set active note',
        notesLoad:'[Notes] Load notes', 
        notesUpdated:'[Notes] Updated note', 
        notesFileUrl:'[Notes] Updated image url', 
        notesDelete:'[Notes] Delete note', 
        notesLogoutCleaning:'[Notes] Logout Cleaning', 
    };

    expect(typesEsperados).toEqual(types);


  });
  
});
