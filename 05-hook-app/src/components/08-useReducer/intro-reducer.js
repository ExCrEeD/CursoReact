const initialState = [{
    id:1,
    todo: 'Comprar pan',
    done:false
}];

const todoReducer = (state = initialState,action) =>{

    if(action?.type==="agregar")
    {
        return [...state,action.payload];
    }
    return state;
}

let toDos = todoReducer();

const newTodo = {
    id:2,
    todo: 'Comprar leche',
    done:false
};

const action ={
    type: 'agregar',
    payload:newTodo
}


toDos = todoReducer(toDos,action);


console.log(toDos);