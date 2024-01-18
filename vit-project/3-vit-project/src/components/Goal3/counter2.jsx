import React,{useState} from "react";
function counter2() {
    const [count, setCount]=useState(0);
    const increment = ()=>{
        setCount(count +1);
    }
    const reset = ()=>{
        setCount(0);
    }
    const decrement = ()=>{
        setCount(count - 1);
    }
  return (
    <div>
      <h1>Counter :{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={reset}>reset</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default counter2

