import React from 'react'
import { TodoListItem } from './TodoListItem'
import "./style.css"

export const TodoList = ({todos,handleDelete,handleToggle}) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((task,index)=>
                    <TodoListItem 
                        key={task.id}
                        task={task}
                        index={index}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        />
            )}
        </ul>
    )
}
