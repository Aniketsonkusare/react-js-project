import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 15;
  const [counter, setCounter] = useState(15)

  const addValue = () => {
    // console.log("Clicked",counter + 1);
    setCounter(counter + 1)
    if (counter >= 30) {
      setCounter(counter)
    }
  }

  const removeValue = () => {
    // console.log("Clicked",counter - 1);
    setCounter(counter - 1)
    if (counter <= 0) {
      setCounter(counter)
    }
  }

  return (
    <>
      <h1>This is My Third Project</h1>
      <h2>Counter Value: {counter}</h2>
      
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
