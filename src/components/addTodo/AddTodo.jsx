import React, { useState } from 'react'
import { StyledForm } from './styles'

const AddTodo = ({ addTodo }) => {
    const [input, setInput] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addTodo(input)
        setInput('')
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <input type="text" className='form-control' placeholder="Create a new todo..." value={input} onChange={(evt) => setInput(evt.target.value)} />
        </StyledForm>
    )
}

export default AddTodo