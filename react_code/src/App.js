import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClick = () => setCount((prev) => prev + 1);
  console.log("all the time");

  const iRunOnlyOnce = () => {
    console.log("Only Once");
  };

  useEffect(() => {
    console.log("api");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{count} </h1>
      <button onClick={onClick}>Click me </button>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
