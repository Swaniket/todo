import React from 'react'

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    // The function here will update the state in the main app:
    // e -> event
    // event returns information of what just happend in the operating field
    // The information lives inside e.target
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    // In this handler, we first need to disable the auto refresh while clicking the button
    const submitTodoHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {
            text: inputText, 
            completed: false,
            id: Math.random() * 10000
        }])
        setInputText('')
    }

    // This will handle the filter functionality
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
    <form>
        {/* Everytime this input is changed inputTextHandler is run */}
        <input value = {inputText} onChange = {inputTextHandler} type="text" className="todo-input" />
        <button onClick = {submitTodoHandler}className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange = {statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    )
}

export default Form