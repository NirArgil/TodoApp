import React, { useContext, useRef } from "react"
import styled, {css} from "styled-components"
import { AiTwotoneDelete } from 'react-icons/ai'
import { RiCheckboxFill } from 'react-icons/ri'
import { AppContext } from '../AppContext.js'
import ContentEditable from 'react-contenteditable'

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
    const editAbleRef = useRef('');
    

        const handleChange = e => {
          editAbleRef.current = e.target.value;
         
        };
 
        const handleBlur = e => { Context.setTodo(e.target.value) };
        
        
       
        
    return (
        <div>
            <Ul>
            {Context.todos.map((todo, i) => (
                <Li key={i}>        
                 <ContentEditable
                   innerRef={editAbleRef.current}
                   html={`${todo.task }`}
                   onChange={handleChange}
                   onBlur={ e => { 
                     e.stopPropagation();
                     Context.editTodo(e, todo._id,{...todo, task:e.target.innerText} ) } }  
                   
                   id={`${todo._id}`}>
        
                
                 </ContentEditable>
                    
            
                    <button  onClick={e => Context.deleteTodo(e, todo._id)}> <AiTwotoneDelete size = { 20 } /> </button>

                   
                    <button key={i}
                    onClick={e => Context.updateTodo(e, todo._id)}
                    className={todo.completed ? "completed" : ""} > <RiCheckboxFill size = { 20 } /> </button>          
                    </Li>
                ))}
            </Ul>
           </div>
         
    )
}