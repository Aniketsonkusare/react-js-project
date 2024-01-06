import { useState } from 'react'
import Read from './Components/Read'
import Create from './Components/Create'
import Update from './Components/Update'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Read/>}> </Route>
        <Route path='/create' element={<Create/>}> </Route>
        <Route path='/update' element={<Update/>}> </Route>
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
