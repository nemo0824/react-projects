import styled, {keyframes}  from "styled-components"
import React, { useState } from 'react'
import Circle from "./Circle";
import Square from "./Square";
import { text } from "stream/consumers";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

// interface DummyProps{
//   text:string;
//   active? : boolean;

// }


// function Dummy({text, active = false}:DummyProps){
//   return <h1>{text}</h1>
// }


function App() {
//   const [username, setUsername] = useState("")
//   const onChange = (event: React.FormEvent<HTMLInputElement>)=>{
//    const{
//     currentTarget: {value},

//    } = event;
//    setUsername(value);

//   };
//  const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
//   event.preventDefault();
//   console.log("hello", username)
//  };

//  const onClick = (event: React.FormEvent<HTMLButtonElement>)=>{
//   event.preventDefault();
//   console.log("hi")
//  }

  return <div>
    <Header/>
    <Outlet/>
   
    </div>
}

export default App;
