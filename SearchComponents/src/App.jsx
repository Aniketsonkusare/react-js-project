import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Details from './data/Details'
import Search from './Components/Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={Details}/>
    </div>
    </>
  )
}

export default App
