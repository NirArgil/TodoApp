import React, { useState, useEffect, useContext, useRef } from "react"
import styled, {css} from "styled-components"
import { AiTwotoneDelete } from 'react-icons/ai'
import { RiCheckboxFill } from 'react-icons/ri'
import { AppContext } from '../AppContext.js'
import ContentEditable from 'react-contenteditable'


   /* // contentEditable = "true" ref={ Context.editAbleRef }  */

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
    const editableRef = useRef('');

   
   
    return (
        <div>
            <Ul>
            {Context.todos.map(({ _id, task, completed,}, i) => (
                <Li>        
                 <div
                suppressContentEditableWarning
                contentEditable
                ref={editableRef}
                spellCheck={false}
                onPaste={(e) => {
                e.preventDefault();
                const text = e.clipboardData.getData("text");
                editableRef.current.innerText = text;}}>
                    
                  {task}
                
                 </div>
                    
            
                    <button  onClick={e => Context.deleteTodo(e, _id)}> <AiTwotoneDelete size = { 20 } /> </button>

                   
                    <button key={i}
                    onClick={e => Context.updateTodo(e, _id)}
                    className={completed ? "completed" : ""} > <RiCheckboxFill size = { 20 } /> </button>          
                    </Li>
                ))}
            </Ul>
           </div>
         
    )
}