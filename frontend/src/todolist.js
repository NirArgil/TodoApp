import React, { useState, useEffect, useContext } from "react"
import styled, {css} from "styled-components"
import { AppContext } from './AppContext.js'


const Li = styled.li`
color: rgb(39, 37, 35);
background-color: rgba(255, 96, 5, 0.863);
padding: 5px;
margin-bottom: 10px;
border-radius: 10px;
list-style: none;
padding-left: 0;
width: 200px;
`
const Ul = styled.ul`
padding: 0;
`

export default function Todolist() {
    const Context = useContext(AppContext)

    return (
        <div>
            <Ul>
            {Context.todos.map(({ _id, task, completed, edit}, i) => (
                <Li>        
                <div id="task"  
                    contentEditable = "true"
                    ref={ Context.editAbleRef } >    {task} </div>
            
                    <button  onClick={e => Context.deleteTodo(e, _id)}> [X] </button>

                    <button  onClick= {Context.onButtonClick}> save edit task</button>
                    
                    <button key={i} 
                    onClick={e => Context.editTodo(e, _id)}> save </button>
            
                    <button key={i}
                    onClick={e => Context.updateTodo(e, _id)}
                    className={completed ? "completed" : ""} > DONE </button>          
                    </Li>
                ))}
            </Ul>
           </div>
         
    )
}