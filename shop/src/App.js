import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail.js";
import axios from "axios";
// import About from "./routes/about.js";

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [clickCount, setClickCount] = useState(1);
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
              // ddd
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map(function (a, i) {
                    return <Card shoes={shoes[i]} i={i + 1} key={i}></Card>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  <p>로딩중</p>;
                  axios
                    .get("http://codingapple1.github.io/shop/data2.json")
                    .then((response) => {
                      console.log(response.data);
                      let copy = [...shoes, ...response.data];
                      setShoes(copy);
                      setClickCount(clickCount + 1);
                      console.log(clickCount);
                      if (clickCount > 2) {
                        alert("없음");
                      }
                    });
                  <p>로딩 완료</p>;
                }}
                // ajax 요청이 실패할경우 ? .catch(()=>{console.log('실패')})
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
        <Route path="/about" element={<div>about 페이지</div>}></Route>

        <Route path="*" element={<div>없는페이지</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      ></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
