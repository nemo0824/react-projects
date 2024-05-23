import Movie from "./components/Movie";
import Detail from "./routes/Detial";
import Home from "./routes/Home";
import{BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;
