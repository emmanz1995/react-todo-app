import React, { useState } from 'react'
import { StyledModalContainer, StyledUpdateButton, StyledInput } from './styles'
import Backdrop from './Backdrop'
import { RiCloseCircleLine } from 'react-icons/ri'

const Modal = ({ closeModal, updateTodo, todoId, todo }) => {
    const [text, setText] = useState('')
    const handleUpdateTodo = (evt) => {
        evt.preventDefault()
        updateTodo(todoId, text)
        closeModal()
    }

    return (
        <Backdrop>
            <StyledModalContainer>
                <form onSubmit={handleUpdateTodo}>
                    <div className="modal-form-wrapper">
                        <h3>Update Todo</h3>
                        <RiCloseCircleLine onClick={closeModal} />
                    </div>
                    <StyledInput type="text" value={text} placeholder={todo.text} onChange={(evt) => setText(evt.target.value)} />
                    <StyledUpdateButton type="submit">Update Todo</StyledUpdateButton>
                </form>
            </StyledModalContainer>
        </Backdrop>
    )
}

export default Modal