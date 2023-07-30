import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Card} from 'react-bootstrap'
import profileImage from './LIM.jpeg';

function Profile() {
    return (
      <Card className='Profile'style={{ width: '18rem' }}>
        <Card.Img variant="top" src={profileImage} />
        <Card.Body>
          <Card.Title>임재원 </Card.Title>
          <Card.Text>
            <p>생년월일 : 96.08.24</p>
            <p>거주지 : 과천시 </p>
            <p>휴대폰 : 010-4146-5622</p>          
        </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }

  export default Profile;