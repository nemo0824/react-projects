import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";

import {Context1} from './App.js'

function Detail(props){
  

  useEffect(()=>{
    //mount, updatre시 코드실행시켜주는 useEffect
    console.log('안녕');

  })

  let [num, setNum] = useState('')
   useEffect(()=>{
    if(isNaN(num) == true){
      alert('숫자만입력하세요')
    }
   }, [Number])

  let {id} = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id == id
  });
  let [count, setCount] = useState(0);
  let [alert, setalert] = useState(true);
  let [탭, 탭변경] = useState(0);

  useEffect(()=>{
    let a = setTimeout(()=>{ setalert(false)}, 2000)

    
  }, [])
  

  
    return(
        <div className="container">
          { 
          alert == true ? 
          <div className="alert alert-warning">
            2초이네 구매시 할인
          </div> : null
         
           }
            {count}
          <button onClick={()=>{setCount(count+1)}}>버튼</button>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h3>수량입력란</h3><input></input>
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link1" >버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link2"
          >버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
       
        <TabContent 탭={탭}></TabContent>

           


      </div> 
     
    )
  }
  
  function TabContent({탭}){

    let [fade, setFade] = useState('')

    useEffect(()=> {
      setTimeout(()=>{setFade('end')}, 100)
      //automatic batching
      // state변경함수들이 근처에 있으면 하나에 합쳐서 해주기때문에 
      // 재렌더링을 계속하지않고 마지막에 제랜더링 한번만해주기때문
      // 그래서 timeout으로 시가 ㄴ늘려주
      return ()=>{
        setFade('')
      }
    },[탭])

    return (<div className={'start' + fade}>
      {[<div>내용0</div>, <div>내용1</div>,<div>내용2</div>] [탭] }</div>)
  }


  
  

  export default Detail;
