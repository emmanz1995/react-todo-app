import React from 'react'
import { StyledPanel } from './styles'
import {FaBan, FaCheckCircle, FaTrash} from 'react-icons/fa'

const Panel = ({ todo, deleteTodo, toggleDone }) => {
    return (
        <StyledPanel>
            <div className="header-wrapper">
                {todo.done ?
                    <FaCheckCircle className="toggle-btn" onClick={() => toggleDone(todo.id)} /> : <FaBan className="toggle-btn" onClick={() => toggleDone(todo.id)} />
                }{' '}
                <p className={todo.done ? 'slash': ''}>{todo.text}</p>
            </div>
            <div>
                <FaTrash className="delete-btn" onClick={() => deleteTodo(todo.id)} />
            </div>
        </StyledPanel>
    )
}

export default Panel