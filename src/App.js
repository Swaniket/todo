import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  // States
  // InputText is the value &
  // setInputText is the function that allows you to change the value
  const [inputText, setInputText] = useState("")
  // For setting the todos
  // The name of todos will be a list
  const [todos, setTodos] = useState([])
  // State for the filter
  const [status, setStatus] = useState('all')
  // The state for the filtered items
  const [filteredTodos, setFilteredTodos] = useState([])

  // Run once only when the app starts
  useEffect( () => {
    getLocalTodos()
  }, [])

  // useEffect runs every time there is some change in the states passed in.
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])


  // Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default: 
        setFilteredTodos(todos)
        break
    }
  }

  // Save the data to local storage
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }


  return (
    <div className = 'todo-app'>
      <header>
        <h1>Todo with React with Local Storage </h1>
      </header>
      <Form 
        inputText= {inputText} 
        todos = {todos} 
        setTodos = {setTodos} 
        setInputText = {setInputText} 
        setStatus = {setStatus}
        
      />
      <TodoList 
        setTodos = {setTodos} 
        todos = {todos} 
        filteredTodos = {filteredTodos}
      />
    </div>
  )
}

export default App
