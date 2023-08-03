import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Login() {
  return (
    <div className='Login_form'>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Form style={{ maxWidth: '300px' }}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <button>로그인 버튼</button>
      </Form.Group>
    </Form>
    </Container>
    </div>
    //회원가입, 로그인, 장바구니, 결제 , 샵, 마이페이지 

    
  );
}

export default Login;