import React, { useState } from 'react'

function Formvalidation2() {
  const[firstname,setFirstName] = useState("")
  const[lastname,setLastName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const[firstnameerr,setFirstNameerr] = useState(false)
  const[lastnameerr,setLastNameerr] = useState(false)
  const[emailerr,setEmailerr] = useState(false)
  const[passworderr,setPassworderr] = useState(false)

  function signin(e) {
    if (firstname.length < 3 || lastname.length < 3) {
      alert("type correct values")
    }
    if (email.length < 8 || password.length < 8) {
      alert("type correct values")
    }
    else{
      alert("all good :)")
    }
    e.preventDefault();
  }

  function FirstName(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setFirstNameerr(true)
    }     
    else{
      setFirstNameerr(false)
    }
    setFirstName(item)
  }

  function LasttName(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setLastNameerr(true)
    }
    else{
      setLastNameerr(false)
    }
    setLastName(item)
  }

  function Email(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setEmailerr(true)
    }
    else{
      setEmailerr(false)
    }
    setEmail(item)
  }

  function Password(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setPassworderr(true)
    }
    else{
      setPassworderr(false)
    }
    setPassword(item)
  }
  
  return (
    <>
      <form action="" onSubmit={signin}>
        <h1>Sign in Form</h1>
        <label htmlFor="">First Name: </label>
        <input type="text" placeholder='please enter the first name' onChange={FirstName}/><br />{firstnameerr ? <span>please enter the atleast 3 character</span> : ""}
        <br /><br />

        <label htmlFor="">Last Name: </label>
        <input type="text" placeholder='please enter the last name' onChange={LasttName}/><br />
        {lastnameerr ? <span>please enter the atleast 3 character</span> : ""}

        <br /><br />
        <label htmlFor="">Email: </label>
        <input type="email" placeholder='please enter the last name' onChange={Email}/><br />
        {emailerr ? <span>please enter the atleast 8 character</span> : ""}

        <br /><br />
        <label htmlFor="">PassWord: </label>
        <input type="text" placeholder='please enter the last name' onChange={Password}/><br />
        {passworderr ? <span>please enter the atleast 8 character</span> : ""}

        <br /><br />
        <button className='submit'>Submit</button>
      </form>
    </>
  )
}

export default Formvalidation2
