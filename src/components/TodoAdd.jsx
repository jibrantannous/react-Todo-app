import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({handleAdd}) => {

    const [{description}, handleInputCHange, reset] = useForm({
        description: ''
    });

    const handleAddTodo = (e)=>{
        e.preventDefault();
        
        if(description.trim().length <=1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAdd(newTodo)

        reset();
    }

  return (
    <>
        <h4>Agregar TODO</h4>
        <hr />
        
        <form onSubmit={handleAddTodo}>
            <input 
                type="text"
                name="description"
                className="form-control"
                placeholder="Aprender ..."
                autoComplete="off" 
                value={description}
                onChange={handleInputCHange}
            />

            <button 
                type="submit"
                className="btn btn-outline-primary w-100 mt-1 "
            >
                Agregar
            </button>
        </form>
    </>
  )
}
