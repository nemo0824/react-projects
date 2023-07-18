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




function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();



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
       </>
      }/>

      <Route path='/detail' element= {<Detail shoes = {shoes}></Detail>}/>
      <Route path='/detail' element= {<Detail shoes = {shoes}></Detail>}/>
      <Route path='/detail' element= {<Detail shoes = {shoes}></Detail>}/>
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
