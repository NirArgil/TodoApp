import axios from "axios";
let API_URL = "/todos/";

if(process.env.NODE_ENV === 'development'){
  API_URL = 'http://localhost:3001/todos/';
}

async function createTodo(task) {
  const { data: newTodo } = await axios.post(API_URL, {
    task,
  })
  
  return newTodo

}

async function deleteTodo(id) {
  const message = await axios.delete(`${API_URL}${id}`)
  return message
}

async function updateTodo(id, payload) {
  const { data: newTodo } = await axios.put(`${API_URL}${id}`, payload)
  return newTodo
}

async function editTodo(id, edit) {
  const { data: newTodo } = await axios.put(`${API_URL}${id}`, edit)
  return newTodo
}

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL)
  return todos
}

export default { createTodo, deleteTodo, updateTodo, editTodo, getAllTodos }