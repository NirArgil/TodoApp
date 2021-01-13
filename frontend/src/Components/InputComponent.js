import React, { useState, useEffect, useContext } from 'react'
import styled, {css} from "styled-components"
import "../App.css"
import { GoDiffAdded } from 'react-icons/go';
import { AppContext } from '../AppContext.js'


 
const CreateButton = styled.button`
    outline: none;
    position: relative;
    top: 14px;
    left: 16px;
    padding: 3px;
    font-size: 1px;
    margin: 20px;
    margin-right: 0px;
    background-color: #0066FF;
    color: #FFF;
    border-radius: 5px;
    border: 0px solid #0066FF;
    &:hover {
    background-color: #003399;
    border: 0px solid #003399;
    cursor: pointer;}
   

     @media (max-width: 600px) {
      font-size: 9px;
     }
    `
     
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
       margin-right: -10px;
       font-size: 14px;
       border: 2px solid #FFF;
       border-radius: 5px;
       width: 250px;

       @media (max-width: 600px) {
        width: 150px;
         }
       ` 

export default function InputComponent() { 
   
  const Context = useContext(AppContext) 

    return (
        <div>
        
         <TodoInput
          placeholder="Type Here"
          id="todo-input"
          type="text"
          
          onChange={({ target }) => Context.setTodo(target.value)} />
        
        <CreateButton onClick={Context.createTodo}>
        <GoDiffAdded size = { 40 }  />
        </CreateButton>

      <h2> Tasks: { Context.TodoTasks }</h2>  
      <div className="Uncompleted"><h2> Available tasks: {Context.todoRemaining}</h2> </div>
      
    </div>
 )    
}
