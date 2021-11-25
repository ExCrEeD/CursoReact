import React from 'react'
import "./style.css"

export const TodoListItem = ({task,index,handleDelete,handleToggle}) => {
    return (
        <li
            className="list-group-item"
        >
            <p
                className={`${task.done && 'complete'}`}
                onClick={() => handleToggle(task.id)}
            >{index + 1}.{task.desc}</p>
            <button
                className="btn btn-danger"
                onClick={() => handleDelete(task.id)}
            >borrar</button>
        </li>
    )
}
