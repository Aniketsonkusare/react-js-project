import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Formvalidation1 from './Formvalidation/Formvalidation1.jsx'
// import Formvalidation2 from './Formvalidation/Formvalidation2.jsx'
import Localstorage from './Localstorage/Localstorage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Formvalidation1/> */}
    {/* <Formvalidation2/> */}
    <Localstorage/>
  </React.StrictMode>,
)
