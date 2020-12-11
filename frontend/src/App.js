import React, { useState, useEffect } from "react"
import "./App.css"
import APIHelper from "./APIHelper.js"
import { BrowserRouter, Route, Link } from "react-router-dom";
import Todo from "./Todo";
import Todolist from "./todolist"

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")

  useEffect(() => {
    const fetchTodoAndSetTodos = async () => {
      const todos = await APIHelper.getAllTodos()
      setTodos(todos)
    }
    fetchTodoAndSetTodos()
  }, [])     

  const createTodo = async e => {
    e.preventDefault()
    if (!todo) {
      alert("please enter something")
      return
    }
    if (todos.some(({ task }) => task === todo)) {
      alert(`Task: ${todo} already exists`)
      return
    }
    const newTodo = await APIHelper.createTodo(todo)
    setTodos([...todos, newTodo])
  }

  const deleteTodo = async (e, id) => {
    try {
      e.stopPropagation()
      await APIHelper.deleteTodo(id)
      setTodos(todos.filter(({ _id: i }) => id !== i))
    } catch (err) {}
  }

  const updateTodo = async (e, id) => {
    e.stopPropagation()
    const payload = {
      completed: !todos.find(todo => todo._id === id).completed,
    }
    const updatedTodo = await APIHelper.updateTodo(id, payload)
    setTodos(todos.map(todo => (todo._id === id ? updatedTodo : todo)))
  }

  const editTodo = async (e, id) => {
    e.stopPropagation()
    const edit = {
      edited: !todos.find(todo => todo._id === id).edited,
    }
    const edTodo = await APIHelper.editTodo(id, edit)
    setTodos(todos.map(todo => (todo._id === id ? editTodo : todo)))
  }

  

  return (
    <div className="App"> 
    
      <Todo></Todo>

    </div>
  )
}

export default App
