import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'

function App() {


  return (
    <>
      <h1 className='text-4xl'>Learn about redux toolkit</h1>
      <AddTodo/>
      <Todo/>
    </>
  )
}

export default App
