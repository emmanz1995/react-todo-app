import React, { useState } from 'react'
import './addTodo.scss'

const AddTodo = ({ addTodo }) => {
    const [input, setInput] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addTodo(input)
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input type="text" className='form-control' placeholder="Create a new todo..." value={input} onChange={(evt) => setInput(evt.target.value)} />
        </form>
    )
}

export default AddTodo