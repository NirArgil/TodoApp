import React from 'react';
import styled, {css} from "styled-components";

const HeaderDiv = styled.div`
  margin: auto -16px;
  padding: 9px 140px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  color: blue;

  @media (max-width: 640) {
    padding: 9px 20px;
    }
`

export default function Header() {
  return <HeaderDiv>
         <h1 className="title">Nir Todo App</h1>
       </HeaderDiv>
}