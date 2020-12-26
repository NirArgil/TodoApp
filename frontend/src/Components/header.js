import React from 'react';
import styled, {css} from "styled-components";

const H1 = styled.h1`
color: blue;
`

export default function Header() {
  return <div className="header">
    <H1 className="title">Nir Todo App</H1>
  </div>
}