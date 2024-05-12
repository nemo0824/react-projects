import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("all the time");

  useEffect(() => {
    console.log(" I Run Only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search For ", keyword);
    }
  }, [keyword]);

  useEffect(() => {
    console.log("I Run only Count Change");
  }, [count]);

  useEffect(() => {
    console.log("1번만 시작때만");
  }, []);

  return (
    <div>
      <input
        type="text"
        value={keyword}
        placeholder="Search here"
        onChange={onChange}
      ></input>
      <h1 className={styles.title}>{count} </h1>
      <button onClick={onClick}>Click me </button>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
