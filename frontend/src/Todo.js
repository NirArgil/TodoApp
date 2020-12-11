import React, { useState, useEffect } from "react"
import "./App.css"
import APIHelper from "./APIHelper.js" 
import "./App"  
import Todolist from "./todolist"
import styled, {css} from "styled-components"



const CreateButton = styled.button`
   padding: 10px;
   font-size: 16px;
   margin: 10px;
   margin-right: 0px;
   background-color: #0066FF;
   color: #FFF;
   border-radius: 5px;
   border: 2px solid #0066FF;
  &:hover {
  background-color: #003399;
  border: 2px solid #003399;
  cursor: pointer;
  }`

  const Container = styled.div`
  margin: 70px auto;
  width: 800px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  background-color: rgba(47, 108, 240, 0.5);
  `
  const TodoInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 2px solid #FFF;
  border-radius: 5px;
  width: 250px;
  `
  

export default function Todo() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState("")
  const [count, setCount] = useState(0)
  const [todoRemaining, setTodoRemaining] = useState(0);
 
  useEffect(() => { 
  setTodoRemaining(todos.filter(todo => !todo.completed).length) 
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

  const ediTodo = async (e, id) => {
    e.stopPropagation()
    const edt = {
      edited: !todos.find(todo => todo._id === id).edited,
    }
    const editedTodo = await APIHelper.editTodo(id, edt)
    setTodos(todos.map(todo => (todo._id === id ? editedTodo : todo)))
  }



return (
  <Container className="app">
      <h1> Todo App </h1>
      
      <div>
        <TodoInput
          placeholder="Type Here"
          id="todo-input"
          type="text"
          
          onChange={({ target }) => setTodo(target.value)}
        />
        
        <CreateButton onClick={createTodo}>
          Create Task!
        </CreateButton>

      <h2> Tasks: { count }</h2>  
      <div className="Uncompleted"><h2>Available tasks: {todoRemaining}</h2> </div>
      </div>
      <ul>
          {todos.map(({ _id, task, completed,edited }, i) => (
             <li>        
              <div id="task"  
                contentEditable="true">    {task} </div>
        
                <button  onClick={e => deleteTodo(e, _id)}> [X] </button>

                <button  onClick={e => ediTodo(e, _id)}
                onChange={({ target }) => setTodo(target.value)}> save </button>
        
                <button key={i}
                onClick={e => updateTodo(e, _id)}
                 className={completed ? "completed" : ""} > DONE </button>          
                </li>
              ))}
           </ul>

</Container>

 )
}