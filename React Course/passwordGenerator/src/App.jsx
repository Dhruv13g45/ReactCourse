import { useState, useEffect, useCallback, useRef } from 'react'
import './App.css'

function App() {

  const [passlength, setPasslength] = useState(8)
  const [password, setPassword] = useState("")
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)

  //when we use useRef hook we need to create a variable to store the reference
  const passwordReference = useRef(null)
  //currently we dont have any refernce


  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (char) str += "/(){}[]\$#@!%^&*~`?>.,<"




    for (let i = 1; i <= passlength; i++) {
      let char = Math.floor(Math.random(str) * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

    //we cant give password as it is changing everytime so it will run infinitly and setPassword is used for memoization aage padhenge
  }, [number, char, passlength, setPassword])



  const copyPassword = () => {
    //optionally select because may be the value could be zero
    passwordReference.current?.select()
    window.navigator.clipboard.writeText(password)
  }



  useEffect(() => {
    generatePassword()
  }, [number, char, passlength, generatePassword])

  return (
    <>

      <div className="main">
        <h1 className='head'>Password generator</h1>
        <div className="input">
          <input type="text"
            name="password"
            id="pass"
            value={password}
            readOnly
            //now we have the reference
            ref={passwordReference}
          />
          <button type="button" onClick={copyPassword}>COPY</button>
        </div>

        <div className="controls">
          <input type="range" name="range" id="range"
            max={50}
            min={8}
            value={passlength}
            onChange={(event) => setPasslength(event.target.value)}
          />Length ({passlength})
          <input type="checkbox"
            name="numbers"
            id="num"
            defaultChecked={number}
            onChange={() => {
              setNumber((prev) => !prev)
            }}
          />Numbers
          <input type="checkbox"
            name="chars"
            id="char"
            defaultChecked={char}
            onChange={() => {
              setChar((prev) => !prev)
            }}
          />Special charaters
        </div>
      </div>
    </>
  )
}

export default App
