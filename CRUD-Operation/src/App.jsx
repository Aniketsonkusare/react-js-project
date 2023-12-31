import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Create from './components/Create'
import { Route, Routes } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'

function App() {

  return (
    <>
      <div className='container mt-5'>
          {/* <Create/> */}
          <Routes>
            <Route exact path='/' element={<Read/>}></Route>
            <Route exact path='/create' element={<Create/>}></Route>
            <Route exact path='/update' element={<Update/>}></Route>
          </Routes>
      </div>
    </>
  )
}

export default App
