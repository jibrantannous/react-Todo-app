import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './reducer/todoReducer'
import { TodoList } from './components/TodoList'
import { TodoAdd } from './components/TodoAdd'

import './styles/TodoApp.css'

//la funcion init se llama y lo que sea que 
//retorne es lo que va a ser el inicial state
const init = () =>{

    return JSON.parse(localStorage.getItem('todos')) || [];

    /* return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }] */
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      
        localStorage.setItem('todos', JSON.stringify(todos))
    
    }, [todos])
    

    const handleDelete = (todoId)=>{

        dispatch({
            type: 'delete',
            payload: todoId
        });
    }

    const handleCompleted = (todoId) =>{

        dispatch({
            type: 'completed',
            payload: todoId
        });
    }

    const handleAdd =(newTodo) =>{

        dispatch({
            type: 'add',
            payload: newTodo
        });
    }



  return (
    <div>

        <h1>TodoApp ( {todos.length} )</h1>
        <hr />

        <div className="row">

            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    handleCompleted={handleCompleted} 
                    handleDelete={handleDelete}
                />
            </div>

            <div className="col-5">
                <TodoAdd handleAdd={handleAdd}/>
            </div>

        </div>

    </div>
  )
}
