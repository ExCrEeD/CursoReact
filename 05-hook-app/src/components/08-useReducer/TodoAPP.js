import React,{ useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import "./style.css"



const init = ()=>{
    // return  [{
    //     id:new Date().getTime(),
    //     desc:'Aprender react',
    //     done:false
    // }];   
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoAPP = () => {

    const [todos,dispatch] = useReducer(todoReducer,[],init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) =>{
        const action = {
            type:'delete',
            payload:todoId
        }

        dispatch(action);
    }

    const handleAddTodo = (newTodo)=>{
         dispatch({
                    type: 'add',
                    payload:newTodo
        });
    }

    const handleToggle = (todoId) =>{
        dispatch({
            type:"toggle",
            payload:todoId
        });
    }


    return (
        <div>
            <h1>Todo APP ({todos.length})</h1>
            <hr></hr>
            <div className="row">
                <div className="col-7">
                    <TodoList 
                            todos={todos} 
                            handleDelete={handleDelete}
                            handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>
           
        </div>
    )
}
