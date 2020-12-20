import React, { useState, useEffect, useContext } from "react"
import "./App.css"
import APIHelper from "./APIHelper.js" 
import "./App"  
import InputComponent from "./InputComponent"
import styled, {css} from "styled-components"
import { AppContext } from "./AppContext"
import Todolist  from "./todolist"



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

export default function Todo() {
  const Context = useContext(AppContext)

return (
  <Container>
      
      <InputComponent> </InputComponent>
      <Todolist></Todolist>

</Container>

 )
}