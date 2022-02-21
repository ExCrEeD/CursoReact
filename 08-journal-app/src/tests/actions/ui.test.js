import { finishLoading, removeError, setError, startLoading } from "../../actions/ui";
import { types } from "../../types/types";

describe('pruebas en ui-actions', () => {
  test('todas las acciones deben de funcionar', () => {
      
      const errorMesage = 'Error uwu';
      const acton = setError(errorMesage);
      expect(acton).toEqual({
          type:types.uiSetError,
          payload:errorMesage
      });

     const removeErrorAction = removeError();
     const startLoadingAction = startLoading();
     const finishLoadingAction = finishLoading();


     expect(removeErrorAction).toEqual({
            type:types.uiRemoveError
        });
     expect(startLoadingAction).toEqual({
            type:types.uiStartLoading
        });
     expect(finishLoadingAction).toEqual({
            type:types.uiFinishLoading
        });
  });

  
  
});
