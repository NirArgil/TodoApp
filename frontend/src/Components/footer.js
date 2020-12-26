import React from 'react';
import styled, {css} from "styled-components";

const H3 = styled.h3`
font-size: 14px;
color: green;
`

export default function Footer() {
  return <div className="footer">
    <H3 className="title">All Rights reserved to Nir</H3>
  </div>
}