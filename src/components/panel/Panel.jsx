import React, {useState} from 'react'
import { FaBan, FaCheckCircle, FaTrash, FaEdit } from 'react-icons/fa'
import Modal from "../modal/Modal";
import './panel.scss'

const Panel = (props) => {
    const { todo, updateTodo, deleteTodo, toggleDone } = props
    const [ showHide, setShowHide ] = useState(false)
    const handleRevealModal = () => {
        setShowHide(true)
    }
    const handleCloseModal = () => setShowHide(false)
    return (
        <div className="panel">
            <div className="header-wrapper">
                {showHide && <Modal closeModal={handleCloseModal} todoId={todo.id} updateTodo={updateTodo} todo={todo} />}
                {todo.done ?
                    <FaCheckCircle className="toggle-btn" onClick={() => toggleDone(todo.id)} /> : <FaBan className="toggle-btn" onClick={() => toggleDone(todo.id)} />
                }{' '}
                <p className={todo.done ? 'slash': ''}>{todo.text}</p>
            </div>
            <div>
                <FaTrash className="delete-btn" onClick={() => deleteTodo(todo.id)} />{' '}
                <FaEdit className="update-btn" onClick={() => handleRevealModal(todo.id)} />
            </div>
        </div>
    )
}

export default Panel