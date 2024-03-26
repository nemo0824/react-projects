import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
// let YellowBtn = styled.button`
//   background: yellow;
//   color: black;
//   padding: 10;
// `;

// let Box = styled.div`
//   background: grey;
//   padding: 20px;
// `;
function Detail(props) {
  let [count, setCount] = useState(0);
  let { id } = useParams();
  let findproduct = props.shoes.find((a) => (a.id = id));
  let [num, setNum] = useState("");
  let [tab, setTab] = useState(0);

  // console.log(" mount시, update시");
  // 생명주기 mount, update, unmount시
  // useEffect 쓰는 이유
  // --> 실행시점이 다르다 html 렌더링이후에 동작 함
  // html 렌더링이후에 for문같은 어려운 작업을 하기때문에 시간적으로 효율적임
  // 1. 어려운 연산 , 2. 서버에서 데이터 가져오는 작업, 3. 타이머 장착하는것
  // side effect : 함수의 핵심기능과 상관없는 부가기능
  // 먼저 return 부터 읽기때문에 먼저출력됨 clean up function은 mount시 실행안됨 unmount시 실행됨
  // useEffect 실행조건 넣을수있는곳은 [] 의존성 dependency
  //  []  아무것도 안넣으면 mount시에만 됨 update시에는 실행 x
  // use Effect 동작전에 실해오디는 return()=>{}

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자를 입력하세요");
    }
  }, [num]);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {/* <YellowBtn>버튼</YellowBtn>
      <Box>ㅎㅇ</Box> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>

        <input
          onChange={(e) => {
            setNum(e.target.value);
          }}
        ></input>
        <div className="col-md-6">
          <h4 className="pt-5">{findproduct.title}</h4>
          <p>{findproduct.content}</p>
          <p>{findproduct.price}</p>

          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}></TabContent>
    </div>
  );
}

function TabContent(props) {
  if (props.tab == 0) {
    return <div>내용0</div>;
  }
  if (props.tab == 1) {
    return <div>내용1</div>;
  }
  if (props.tab == 2) {
    return <div>내용2</div>;
  }
}

export default Detail;
