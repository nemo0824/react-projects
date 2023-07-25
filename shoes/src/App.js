import logo from './logo.svg';
import './App.css';
import { Button, Navbar,Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Shop</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'>
        
      </div>

    </div>
  );
}

export default App;
