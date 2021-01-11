import React, { useContext, useRef } from "react"
import styled, {css} from "styled-components"
import { AiTwotoneDelete } from 'react-icons/ai'
import { RiCheckboxFill } from 'react-icons/ri'
import { AppContext } from '../AppContext.js'
import ContentEditable from 'react-contenteditable'


const Li = styled.li`

min-height: 70px;

  border: 3px solid white;
  flex: 1 1 auto;
  line-height: -10px;
  text-align: center;
color: rgb(39, 37, 35);
margin: auto 10px;
padding: 9px 140px;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
padding: 5px;
margin-bottom: 10px;
border-radius: 10px;
list-style: none;
padding-left: 0;
width: 200px;
`
const Ul = styled.ul`
padding: 0;
margin: 20px auto;
  display: flex;
  flex-flow: row wrap;
`

export default function Todolist() {
    const Context = useContext(AppContext)
    const editAbleRef = useRef('');
    

        const handleChange = e => {
          editAbleRef.current = e.target.value;
         
        };
        
        
       
        
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
                    
                   <br /> 
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