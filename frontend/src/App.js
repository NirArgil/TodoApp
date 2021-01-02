import React, { useState, useEffect, useRef } from "react"
import "./App.css"
import APIHelper from "./APIHelper.js"
import Todo from "./Components/Todo";
import { AppContext } from "./AppContext";

export default function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [count, setCount] = useState(0)
  const [todoRemaining, setTodoRemaining] = useState(0);
  const [TodoTasks, setTodoTasks] = useState(0);
 
  useEffect(() => { 
    setTodoRemaining(todos.filter(todo => !todo.completed).length) 
    });
  
  useEffect(() => { 
    setTodoTasks(todos.filter(todo => todo).length) 
    });

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
      alert("Please Enter Something")
      return
    }
    if (todos.some(({ task }) => task === todo)) {
      alert(`Task: ${todo} already exists`)
      return
    }
    const newTodo = await APIHelper.createTodo(todo)
    setTodos([...todos, newTodo])

    function Clear() {
      let clear = document.getElementById("todo-input");
      clear.value= "";
     }
     
    Clear();

    function increaseTask() {
     setCount ( count + 1);
    }
  
    increaseTask();
  
  }

  const deleteTodo = async (e, id) => {
    try {
      e.stopPropagation()
      await APIHelper.deleteTodo(id)
      setTodos(todos.filter(({ _id: i }) => id !== i))
    } catch (err) {}

    function Clear() {
      let clear = document.getElementById("todo-input");
      clear.value= "";
     }
     
    Clear();
        
    function decreaseTask() {
      setCount ( count - 1);
     }
   
     decreaseTask();
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
      edited: !todos.find(todo => todo._id === id).edited

    }
    const editedTodo = await APIHelper.editTodo(id, edit)
    setTodos(todos.map(todo => (todo._id === id ? editedTodo : todo)))
  }

  const Context = {editTodo, todos,
    setTodos, setTodo, createTodo, deleteTodo, TodoTasks,
     updateTodo, count, todoRemaining, }

  return (
    <AppContext.Provider value={Context}>
    

    <div className="App"> 
    
      <Todo></Todo>

    </div>
    
    </AppContext.Provider>
    
  ) 

 }

