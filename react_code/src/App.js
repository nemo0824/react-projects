import Movie from "./components/Movie";
import Detail from "./routes/Detial";
import Home from "./routes/Home";
import{BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
  // App(router 사용  경로들 보관) -> home( 전체적인 데이터 props를 이용해서 movie로 넘겨줌 ) -> movie(값들을 받아 표현해줌) -> Detail(제목등을 눌렀을때 표현)
  // 그렇다면 이제 각 페이지별로 어떻게 Detail 표현할것인가 !!?
  // 방법 --> 1. App(router에서 /movie:id) id를 통한 방법  :id 로 변수 경로를 설정하면  useparam이 어떤값인지 받아줌 
  // home에서 id 값을 확인
  // Detail useParam 훅을 이용하여 받을수 있음 그럼 id값만 나타낼수있음


}

export default App;
