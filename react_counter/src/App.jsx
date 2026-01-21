import { useState } from "react"
import Users from "./users";
const App = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(prev => prev + 1);
  }

  const Decrement = () => {
    setCount(prev => prev - 1);
  }
  return (
    <>
    <p>Counter: {count}</p>
    <button onClick={Increment}>Increment </button>
    <button onClick={Decrement}>Decrement </button>
    <Users name="sachin"/>
    <Users name="Pal"/>
    </>
  )
}

export default App;