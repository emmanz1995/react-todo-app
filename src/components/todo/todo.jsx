import React, { useState } from 'react'
import Hero from '../hero/Hero'
import { StyleList } from './styles'
import todoData from '../../todo.json'
import AddTodo from '../addTodo/AddTodo'
import Panel from '../panel/Panel'

const Todo = ({ setTheme, theme }) => {
    const [todos, setTodos] = useState(todoData)
    const [filter, setFilter] = useState('all')

    const FILTER_MAP = {
        all: () => true,
        complete: (todos) => todos.done,
        active: (todos) => !todos.done,
    }
    const FILTER_NAMES = Object.keys(FILTER_MAP)

    const filterList = FILTER_NAMES.map((list, index) => (
        <button
            className="btn btn-filter"
            key={index}
            aria-pressed={list === filter}
            onClick={() => setFilter(list)}
        >
            <span>{list}</span>
        </button>
    ))

    const addTodo = (input) => {
        const formData = {
            id: todos.length + 1,
            text: input,
            done: false
        }
        setTodos([ ...todos, formData ])
    }

    const toggleDone = (id) => {
        const toggle = todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done } : todo)
        setTodos(toggle)
    }

    const deleteTodo = (id) => {
        const filterTodo = todos.filter((todo) => todo.id !== id)
        setTodos(filterTodo)
    }

    const todoList = todos
        .filter(FILTER_MAP[filter])
        .map((todo) => (
            <Panel key={todo.id} todo={todo} deleteTodo={deleteTodo} toggleDone={toggleDone} />
        ))

    return (
        <div>
            <Hero setTheme={setTheme} theme={theme} />
            <AddTodo addTodo={addTodo} />
            <StyleList>
                <div className="panel-section">
                    {todoList}
                    <div className="filter-wrapper">
                        <span>{todos.length} items left</span>
                        <span>{filterList}</span>
                    </div>
                </div>
            </StyleList>
        </div>
    )
}

export default Todo