import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import React, { useState } from 'react';
import './TodaySchedule'
import TodaySchedule from './TodaySchedule';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Care square</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">지원자 임재원</Nav.Link>
          <Nav.Link href="#features">daily</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <TodaySchedule></TodaySchedule>
     

    </div>
    
  );
}









export default App;
