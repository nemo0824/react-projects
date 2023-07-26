import logo from './logo.svg';
import './App.css';
import { Button, Navbar,Nav, Container } from 'react-bootstrap';
import data from './data';
import { useState } from 'react';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail'
import {NavLink} from "react-router-dom";




function App() {

  let [shoes,  setShoes]  = useState(data.filter((item, index)=>(
    index <= 2
  )))
  let navigate = useNavigate(); // 페이지 이동을 도와주는 navigate()
  let [count, setCount] = useState(1)
  
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
                      <Card shoes={shoes[i]} i={i} key={i}></Card>
                    )
                  })
                }
              </div>
            </div>

            <button onClick={()=>{
              let copy = [...data]
             
              // setShoes(copy)
              setCount(count + 1)
              
              console.log(count)
             
              let show = copy.filter((item, index)=>(
                index <= count* 3 + 2
                ))
                //0 1 2 3 4 5 6 7 
                // 속아낸다 반복해요 
                //count가늘어나도 8에 못간다 
                //
              setShoes(show)
              console.log(show)
              
              //1. 더이상 불러올 데이터가 없을때 
              //2. 버튼을 디스에이블 
              //count == 1 seShoes(copy)
              // let copy = []
              //count == 2 

              //한번눌렀을때  data2 
              //두번눌렀을때 data3
              //세번쨰 눌렀을때 버튼이 비활성화 되게할려고 
              //count를 만든거임

              //data 1에 세개 들어가있다 
              //dat 2에 세개 들어가있다
              // 상품더보기 버튼을 이용해서 

              //  =< count * 3  보여주기 
              // data에 다담고 
              // 초기화면은 3개만 

              
            }}>상품 더보기 </button>
          </>
      }>

      </Route>
        <Route path='/shop'></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes} ></Detail>}></Route>
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
