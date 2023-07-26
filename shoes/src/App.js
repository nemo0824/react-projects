import logo from './logo.svg';
import './App.css';
import { Button, Navbar,Nav, Container } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail'


function App() {

  let [shoes]  = useState(data)
  let navigate = useNavigate(); // 페이지 이동을 도와주는 navigate()
  
  
  return (
    <div className="App">
     
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">임재원</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/')}>home</Nav.Link>
            <Nav.Link onClick={()=> navigate('/shop')}>Shop</Nav.Link>
            <Nav.Link onClick={()=> navigate('/cart')}>Cart</Nav.Link>
            <Nav.Link onClick={()=> navigate('/detail')}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
      <Route path='/' element={
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i + 1}></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
      }>

      </Route>
        <Route path='/shop'></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>}></Route>
        <Route path='/cart'></Route>
        <Route path='*' element={<div> 404에러 없는페이지 </div>}></Route>
        
        <Route></Route>
      </Routes>


      
    </div>
  );
}



function Card(props){
  return(
    <div className="col-md-4">
    <img src={process.env.PUBLIC_URL + '/nikeshoes'+ props.i + '.jpg'}width="80%" height="60%"/>
    <h4>{props.shoes.title}</h4>
    <p>{props.shoes.content} </p>
    <p>{props.shoes.price} 원</p>
  </div>
  )
}
//nested routes 경로/경로  이단경로 이상 

function About(){
  return(
    <div>
      <h4>회사정보</h4>
    </div>
  )
}
export default App;
