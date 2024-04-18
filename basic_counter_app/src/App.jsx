import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  const increament = () => {
    setCount(count + 1)
  }


  const decreament = () => {
    if (count === 0)
      setCount(0)
    else
      setCount(count - 1)
  }


  return (
    <>
      <h1>React Counter APP</h1>
      <button type="button" onClick={increament}>increament</button>
      <button type="button" onClick={decreament}>decreament</button>
      <h2>Value is {count}</h2>
    </>

  )
}

export default App
