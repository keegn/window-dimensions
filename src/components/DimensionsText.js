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
const StyledX = styled.div`
    font-size: 32px;
    color: white;
`
const DimensionsText = props => (
  <>
    <h1><Text green>width</Text>{props.width}px</h1>
    <StyledX>𝕏</StyledX>
    <h1><Text>height</Text>{props.height}px</h1>
  </>
);

export default DimensionsText;
