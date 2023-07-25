import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import bg from './img/bg.png';
import { createContext, useEffect, useState } from 'react';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './Detail.js'
import axios from 'axios';
import Cart from './Cart'

// 자식요소에 계속 props 쓰기 힘들기때문에 ContxtApi를 사용함 
export let Context1 = createContext() // state 보관함


function App() {

  let [shoes, setshoes] = useState(data)
  let navigate = useNavigate();
  let [count, setcount] = useState(1)
  let [재고] = useState([10,11,12])
  

  let obj = {name : 'kim'}
  JSON.stringify(obj)
  localStorage.setItem('data', JSON.stringify(obj))
  //array,object 는  localstorage저장하려면 json으로 바꾸면됨

  let 꺼낸거 = localStorage.getItem('data')
  console.log(JSON.parse(꺼낸거).name);
  //꺼냈을때도 object로 다시 변환해야함  JSON.parse(꺼낸거)

  // 최근 본상품 보여주기 상세페이지에서 봤던 번호상품들을 번호 localStorage에 저장하기
  // 코딩하는방법


  useEffect(()=> {
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])
  //누가 detail 페이지 접속하면
  //그페이지에 보이는 상품 id가져와서
  //localstorage에 watched 항목에 추가 


  
  



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
        
       

        //localstorage - 재접속해도 남아있음
        //sessionstorage - 브라우저 끄면 날라감


        
        
        
       

      
        
       }}>더보기</button>

        
       </>
      }/>

    
      
      
     

    <Route path="/event" element={<EventPage/>}>
      <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
      <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
    </Route>
      
      <Route path='/detail/:id' element= {
      <Context1.Provider value={{재고, shoes}}> 
      <Detail shoes = {shoes}></Detail>
      </Context1.Provider>}/>
      <Route Paht="*" element={<div>없는페이지요</div>}/>

      <Route path="/cart" element={ <Cart/>}/>

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

function EventPage(){
  return(
    <div> 
      <h4>오늘의 이벤트</h4>
    </div>
  )
}


export default App;
