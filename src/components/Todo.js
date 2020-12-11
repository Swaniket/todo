import React from 'react'

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((element) => {
            // We are checking if the element which we clicked on, is the same as the todo
            if(element.id === todo.id){
                // We will be returning a object with whatever property the item had but with the completed tag flipped
                return {
                    ...element, completed: !element.completed
                }
            }
            // In case it didn't match
            return element
        }))
    }

    return(
        <div className = 'todo'>
            <li className = {`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
            <button onClick = {completeHandler} className = 'complete-btn'><i className = 'fas fa-check'></i></button>
            <button onClick = {deleteHandler} className = 'trash-btn'><i className = 'fas fa-trash'></i></button>
        </div>
    )
}

export default Todo