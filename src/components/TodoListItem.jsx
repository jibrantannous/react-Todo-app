import React from 'react'

export const TodoListItem = ({id, desc, done,index, handleCompleted, handleDelete}) => {
    
    return (
        <li 
            key={id} 
            className="list-group-item" 
        > 
            {/*  {
                todo.done ?

                    <p 
                        onClick={()=>handleCompleted(todo.id)} 
                        className="text-center completed"
                    >
                        {index + 1}. {todo.desc}
                    </p>
                    :
                    <p 
                        onClick={()=>handleCompleted(todo.id)} 
                        className="text-center"
                    >
                        {index + 1}. {todo.desc}
                    </p>
            } */}
            <p 
                onClick={()=>handleCompleted(id)} 
                className={`${done ? "text-center completed": "text-center"}`}
            >
                {index + 1}. {desc}
            </p>

            <button 
                onClick={()=> handleDelete(id)} className="btn btn-danger"
            >
                    Borrar
            </button>

        </li>
    )
}
