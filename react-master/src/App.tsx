import styled, {keyframes}  from "styled-components"
import React from 'react'
import Circle from "./Circle";
import Square from "./Square";

function App() {
  return <>
    <Circle bgColor="teal"/>
    <Circle bgColor="tomato"/>
    <Square bgColor="blue"/>
    </>
}

export default App;
