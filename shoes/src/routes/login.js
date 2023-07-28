import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className=''>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Form style={{ maxWidth: '300px' }}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <button>로그인</button>
      </Form.Group>
    </Form>
    </Container>
    </div>
    
    
  );
}

export default Login;