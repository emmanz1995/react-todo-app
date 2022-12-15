import React, { useState } from "react"
import { FaBan, FaCheckCircle, FaTrash, FaEdit } from "react-icons/fa"
import Modal from "../modal/Modal"
import "./panel.scss"
import { motion } from "framer-motion"

const animation = {
  hidden: {
    y: -30,
    opacity: 0,
  },
  visible: ({ delay }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
    },
  }),
}

const Panel = (props) => {
  const { todo, updateTodo, deleteTodo, toggleDone } = props
  const [showHide, setShowHide] = useState(false)
  const handleRevealModal = () => {
    setShowHide(true)
  }
  const handleCloseModal = () => setShowHide(false)
  return (
    <motion.div
      className="panel"
      custom={{ delay: (todo.id + 1) * 0.1 }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={animation}
      transition={{ ease: [0.6, 0.05, -0.01, 0.99] }}
    >
      <div className="header-wrapper">
        {showHide && (
          <Modal
            closeModal={handleCloseModal}
            todoId={todo.id}
            updateTodo={updateTodo}
            todo={todo}
          />
        )}
        {todo.done ? (
          <FaCheckCircle
            className="toggle-btn"
            onClick={() => toggleDone(todo.id)}
          />
        ) : (
          <FaBan className="toggle-btn" onClick={() => toggleDone(todo.id)} />
        )}{" "}
        <p className={todo.done ? "slash" : ""}>{todo.text}</p>
      </div>
      <div>
        <FaTrash className="delete-btn" onClick={() => deleteTodo(todo.id)} />{" "}
        <FaEdit
          className="update-btn"
          onClick={() => handleRevealModal(todo.id)}
        />
      </div>
    </motion.div>
  )
}

export default Panel
