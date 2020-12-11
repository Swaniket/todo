import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, setTodos, filteredTodos}) => {
    

    return(
        <div className = 'todo-container'>
            <ul className = 'todo-list'>
                {/* For each todo object we can render out a todo component */}
                {filteredTodos.map((todo) => (
                    <Todo 
                        key = {todo.id} 
                        text = {todo.text} 
                        setTodos = {setTodos} 
                        todo = {todo}
                        todos = {todos}
                    />
                ))}
            </ul>

        </div>
    )
}

export default TodoList