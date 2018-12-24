import React from "react";
import styled from 'styled-components'

const Text = styled.span`
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${props => props.green ? '#7aedc6' : '#7eddfd' };
    display: block;
`
const DimensionsText = props => (
  <>
    <h1><Text green>width</Text>{props.width}px</h1>
    <h1><Text>height</Text>{props.height}px</h1>
  </>
);

export default DimensionsText;
