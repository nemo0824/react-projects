import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import bg from './img/bg.png';
import { useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './Detail.js'
import axios from 'axios';




function App() {

  let [shoes, setshoes] = useState(data)
  let navigate = useNavigate();
  let [count, setcount] = useState(1)
  



  return (
    <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      

      <Routes>
      <Route path='/' element= {
        <>
         <div className='main-bg'></div>
         <div className="Container">
         <div className="row">
       {
         shoes.map((a, i)=>{
          return(
         <Card shoes={shoes[i]} i={i+1}></Card>  
       )
      
       })}
         </div>
       </div>
       <button onClick={()=>{
       
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((result)=>{
          console.log(result.data)
          console.log(shoes)
          let copy = [...shoes, ...result.data];
          setshoes(copy);


        }).catch(()=>{
          console.log('실패')
        }) 
        

        
       

      
        
       }}>더보기</button>

        
       </>
      }/>

      <Route path='/detail/:id' element= {<Detail shoes = {shoes}></Detail>}/>
      <Route Paht="*" element={<div>없는페이지요</div>}/>
      </Routes>

      
    
     

    </div>
  );
}

function Card(props){
  return(
    <>
    <div className='col-md-4'>
          <img src={"https://codingapple1.github.io/shop/shoes"+props.i+".jpg"} width="80%"></img>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
    </div>
    
    </>
  )
}




export default App;
