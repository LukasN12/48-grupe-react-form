import { useState } from "react";
import { List } from './components/list/List.jsx';
import { Basketball } from "./components/basketball/Basketball";


function App() {
  const [count, setCount] = useState(0);


  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <List />
      <Basketball />
      <h1>Hooks FTW</h1>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
