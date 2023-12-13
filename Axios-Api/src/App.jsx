import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [myData, setMydata] = useState([])
  const [error,setError] = useState("")

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=> setMydata(res.data))
    .catch((err)=> setError(err.message))
  },[])

  return (
    <>
      <h1 className='tag'>Axios Api</h1>
      {/* if error show this message */}
      {error != "" && <h2>{"api is not work"}</h2>}
      {/* post api in ui */}
      <div className='grid'>
      {myData.map((post)=>{
        const {id,title,body} = post;
        return <div className='axios' key={id}>
          <h2 className='title'>{title.slice(0,15).toUpperCase()}</h2>
          <p className='body'>{body.slice(0,150)}</p>
        </div>
      })}
      </div>
    </>
  )
}

export default App
