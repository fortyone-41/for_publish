import React, { useContext } from 'react'
import Context from '../context' 


function AddTodo() {
    const { addTodo } = useContext(Context)

    return (
        <p>
            <input 
            type="text" 
            id="inputTitle"
            />  
            <button className='at' onClick={addTodo}>Add Todo</button>
        </p> 
    )
}

export default AddTodo