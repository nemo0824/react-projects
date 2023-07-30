import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import React, { useState } from 'react';
import TextExample from './TodaySchedule';
import Profile from './Profile';

function App() {
  

  return (
    <div className='full'>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">이력서</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">지원자 임재원</Nav.Link>
          <Nav.Link href="#features">daily</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className='bg-img'>
      <div className='bg-img-real'></div>
      </div>

      <div className='layout'>
      <Profile/>
      <TextExample/>
      </div>
     

    </div>
    
  );
}









export default App;
