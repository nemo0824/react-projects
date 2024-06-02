import styled, {keyframes}  from "styled-components"
import React, { useState } from 'react'
import Circle from "./Circle";
import Square from "./Square";
import { text } from "stream/consumers";


interface DummyProps{
  text:string;
  active? : boolean;

}


function Dummy({text, active = false}:DummyProps){
  return <h1>{text}</h1>
}


function App() {
  const [username, setUsername] = useState("")
  const onChange = (event: React.FormEvent<HTMLInputElement>)=>{
   const{
    currentTarget: {value},

   } = event;
   setUsername(value);

  };
 const onSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  console.log("hello", username)
 };

 const onClick = (event: React.FormEvent<HTMLButtonElement>)=>{
  event.preventDefault();
  console.log("hi")
 }

  return <>
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="username" value={username} onChange={onChange}/>
      <button>Log in</button>
      <Dummy text="hello"></Dummy>
      <button onClick={onClick}> Click </button>
    </form>
   
    </>
}

export default App;
