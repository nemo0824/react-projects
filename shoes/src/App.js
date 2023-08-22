import logo from './logo.svg';
import { Button, Navbar,Nav, Container } from 'react-bootstrap';
import './App.css';
import data from './data';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail'
import {NavLink} from "react-router-dom";
import Cart from './routes/Cart';
import Login from './routes/Login';
import Test from './routes/Test';
import Enroll from './routes/Enroll';
import Shop  from './routes/Shop';
import ShopDetail from './ShopDetail';
import Order from './routes/Order';
import Pay from './routes/Pay';
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from './store';






function App() {

  let [shoes,  setShoes]  = useState(data.filter((item, index)=>(
    index <= 2
  )))
  let navigate = useNavigate(); // 페이지 이동을 도와주는 navigate()
  let [count, setCount] = useState(1)

  let state = useSelector((state)=>{return state})
  let dispatch = useDispatch()
  
  return (
    <div className="App">
     
      <Navbar bg='dark' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FE 임재원  BE 황수환</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> navigate('/')}>home</Nav.Link>
            <Nav.Link onClick={()=> navigate('/shop')}>Shop</Nav.Link>
            <Nav.Link onClick={() => {
            if (window.sessionStorage.getItem('userId') === null || state.user === null) {
             alert('로그인 후 이용해주세요');
             navigate('/login');
            } else {
             navigate('/cart');
            }
            }}>Cart</Nav.Link>
          
      
          </Nav>
          
          {window.sessionStorage.getItem('userId') == null || state.user == null ?
            <Nav>
          
          <Nav.Link  className="enroll"onClick={()=> navigate('/enroll')}>회원가입</Nav.Link>
          <Nav.Link  className="login" onClick={()=> navigate('/login')}>로그인</Nav.Link>
        
          </Nav>
           : 
           <Nav>
          
           <Nav.Link  className="enroll">{window.sessionStorage.getItem('userId')}님 </Nav.Link>
           <Nav.Link  className="login" onClick={()=>{
            window.sessionStorage.clear() // session날리는거 
            dispatch(logoutUser(null)); //state 날라니는거
            navigate('/')
           }}>로그아웃</Nav.Link>
         
           </Nav>
        }
        </Container>
      </Navbar>

      

      <Routes>
      <Route path='/' element={
        <>
            <div className='main-bg'></div>
            <div className="container">
              <br></br>
              <div className='alert alert-warning 'id= "popproduct">인기상품</div>
              <div className="row">
                {
                  shoes.map((a, i) => {
                    return (
                      <Card shoes={shoes[i]} i={i} key={i}></Card>
                    )
                  })
                }
              </div>
            </div>

            <button className='btn btn-danger' onClick={()=>{
              let copy = [...data]
             
              // setShoes(copy)
              setCount(count + 1)
              
              console.log(count)
             
              let show = copy.filter((item, index)=>(
                index <= count* 3 + 2
                ))
              
              setShoes(show)
              console.log(show)
              
             

              
            }}>상품 더보기 </button>
            
        </>
      }>
        {/* 1. App.js에서 Route있던게 인식됨 그래서 Shop.js에 있는 Route안됨
            2. 그렇다면 App.js로 옮겨야하는데 부모자식간에만 props가 되기때문에 안됨
             지금 구조 - App.js -> shop -> shopCard -> shopDetail이기때문에 큰일남 
             
             예상 해결방법 1=> 따라서 구조를 다 재분배하던가 
             예상 해결방법 2=> redux를 써야할수도있음  
             예상 해결방법 3 => route를 꼭 App.js에서 생성돼있는것만  쓸수있는지 shop.js에서 따로 못만드는지? 

             
        */}

      </Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes} ></Detail>}></Route>
        <Route path='/shop/:itemNo' element={<ShopDetail></ShopDetail>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/enroll' element={<Enroll></Enroll>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/Test' element={<Test></Test>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
        <Route path='/pay' element={<Pay></Pay>}></Route>
        <Route path='*' element={<div> 404에러 없는페이지  </div>}></Route>
        
        <Route></Route>
      </Routes>


      
    </div>
  );
}



function Card(props){
  return(
    <div className="col-md-4">
      <NavLink to={"/detail/"+(props.i)}>
    <img src={process.env.PUBLIC_URL + '/nikeshoes'+ (props.i+1) + '.jpg'}width="80%" height="60%"></img>
    </NavLink>
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

