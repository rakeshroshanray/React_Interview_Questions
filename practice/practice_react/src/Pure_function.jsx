import { useState } from "react"
import React from 'react'

function Counter() {
  const [count,setCount] = useState(0);

  const increment = () =>{
    setCount((prev)=>prev+1)
  }
  const decrement = () =>{
    setCount((prev)=>prev-1)
  }
  return (
    <div>
        <h1>Counter</h1>
        <p>count : {count}</p>
        <button onClick = {increment}>Increment</button>
        <button onClick = {decrement}>Decrement</button>
    </div>
  )
}

export default Counter