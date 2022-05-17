import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleCompleted, handleDelete}) => {


    return (
        <ul className="list-group list-group-flush">
            {
                todos.map((todo, index) =>{
                    return <TodoListItem 
                                key={todo.id}
                                {...todo} 
                                index={index}
                                handleCompleted={handleCompleted} 
                                handleDelete={handleDelete} 
                            />
                })
            }
        </ul>
    )
}
