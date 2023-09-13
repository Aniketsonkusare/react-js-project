import React, { useState } from 'react'

function Formvalidation1() {

    const[name,setName] = useState("")
    const[password,setPassword] = useState("")
    const[nameerr,setNameerr] = useState(false)
    const[passworderr,setPassworderr] = useState(false)

    function Login(e) {
        if (name.length < 3 || password.length < 3) {
            alert("type correct values")
        }
        else{
            alert("all good :)")
        }
        e.preventDefault();
    }

    function Name(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setNameerr(true)
        }
        else{
            setNameerr(false)       
        }
        setName(item)
    }
    function Password(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPassworderr(true)
        }
        else{
            setPassworderr(false)
        }
        setPassword(item)
    }
  return (
    <>
        <div>
            <form action="" onSubmit={Login}>
                <h1>Login Form</h1>
                <label htmlFor="">Name: </label>
                <input type="text" placeholder='enter your name' onChange={Name} /><br />{nameerr?<span>please enter the atleast 3 character</span>:""} 
                <br /><br />
                <label htmlFor="">password: </label>
                <input type="password" placeholder='enter the password' onChange={Password}/><br />{passworderr?<span>please enter the atleast 3 character</span>:""}
                <br /><br />
                <button className='submit'>submit</button>
            </form>
        </div>
    </>
    )
}

export default Formvalidation1
