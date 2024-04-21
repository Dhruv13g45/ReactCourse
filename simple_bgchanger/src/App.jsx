import './App.css'
import { useState } from 'react'
import ControlBar from './components/ControlBar'

function App() {


  const [color, setColor] = useState("olive")

  const changeColor = (event) => {
    setColor(event.target.value)
  }

  return (
    <>
      <div className="screen" style={{ backgroundColor: color }}></div>
      <ControlBar changeColor={changeColor} />
    </>
  )
}

export default App
