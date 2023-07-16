import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // let [글제목, b] = useState('남자 코트 추천');
  // let [logo, setlogo] = useState('React blog');
  // let [글제목1, c] = useState('강남우동 맛집');
  // let [글제목2, d] = useState('파이썬 독학');
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남우동 맛집', '파이썬독학']);
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);


  
  //함수만드는거 ()=> {} 


  //deStructing 변수생성문법
  // let num = [1, 2];
  // let[a , c] = [1,2];
  // let a = num[0];
  // let c = num[1];

  //Q 1) 왜 STATE를 쓸까? 변수안쓰고 
  // 일반변수는 갑자기 변경되면 
  // html에 자동으로 반영이 되지않음 
  // but state는 바뀌어도 
  // state 쓰던 html은 자동으로 재렌더링이됨 


  //Q 2) STate언제써야함?
  // 변동시 자동으로 html에 반영되게 만들고싶으면 State사용
  
  //숙제 글제목들을 state로 만들기 



  //State 변경하는법 
  // state변경함수(새로운  state)


  //[state변경함수 특징]
  // 기존state == 신규state 의 경우 변경안해줌 
  // array/object의 특징 
  //reference data type 검색해서 더 공부 
  // ... 는 괄호 벗겨주세요
  // 그래서 화살표가 달라져서 바뀌어지는것임
  //state가 arry/object이면 독립적인 카피본을 만들어서 수정해야함
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post} style={{color : 'blue'}}>블로그</h4>
      </div>
{/* 
      <button onClick={()=>{
        let copy1 = [...글제목];
        copy1.sort((a,b) => a.toUpperCase()<b.toUpperCase() ? -1 : 1);
        글제목변경(copy1);

      }}>가나다순 정렬</button>
 
      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = "여자코트추천";
        글제목변경(copy); }}>글제목변경</button> */}
        

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={()=>{좋아요변경(좋아요+1)}}>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

        {
          글제목.map(function(a, i){
            return (
            <div className='list' key={i}>
            <h4 onClick={()=> {setModal(true); setTitle(i)}}>{글제목[i]} <span onClick={()=>{
              let copy = [...좋아요];
              copy[i] =  copy[i] +1;
              좋아요변경(copy)
            }}>👍</span> {좋아요[i]}</h4>
            <p>2월 17일 발행</p>
          </div>
          )
          })
        }




      <button onClick={()=> {setTitle(0)}}>글제목0</button>
      <button onClick={()=> {setTitle(1)}}>글제목1</button>
      <button onClick={()=> {setTitle(2)}}>글제목2</button>
      {
        modal == true ? <Modal title = {title} 글제목변경={글제목변경} 글제목 = {글제목}/> : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal'>
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button >글 수정 </button>
    
  </div>
  //div 독립적으로 x
  )
}
//컴포넌트 어떤경우에 써야할까? 
// 1. 반복적인 html 축약시
// 2. 큰 페이지들 
// 3. 자주변경되는 것들 

//컴포넌트의 단점 
// state 가져다 쓸때 문제 생김 
// A함수에 있던 변수는 B함수에서 맘대로 가져다 쓸수 없음 





//1.중괄호 넣고 변수 넣으면 알아서들어감
//2.class =" " 이게아니라 className=""
//3. 데이터바인딩 서버에서 데이터를 넣는것 
//4. style 넣을 때 style={{스타일명: '값'}}
//자료를 잠깐 저장할때는 변수
//state 써도 자료 저장 잠깐 가능
//state 쓰는법 
//1. import{userState}
//2. userState(보관할 자료)
//3. let[직명, 작명] 
//+ let[a. b]  a는 그 자료 데이터 그 자체 
// b는  state변경을 도와주는 함수 
//Destructuring문법 
export default App;
