import styled, {keyframes}  from "styled-components"
import React from 'react'
import Circle from "./Circle";
import Square from "./Square";

function App() {
  return <>
    <Circle bgColor="teal" borderColor="black"/>
    <Circle bgColor="tomato" text="not default value"/>
    <Square bgColor="blue"/>
    </>
}

export default App;
