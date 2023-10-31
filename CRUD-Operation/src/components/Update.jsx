import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Update() {

    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const [country,setCountry] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))
        setCountry(localStorage.getItem('country'))
    },[])

    const handleUpdate = ((e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/details/${id}`,{
            myName: name,
            myAge: age,
            myEmail: email,
            myCountry: country  
        }).then(() => {
            navigate('/')
        })
    })

  return (
    <>
        <div className="row">
            <div className="col-md-4">
                <div className='p-4 text-center'>
                    <h1>Update data</h1>
                </div>
                <div className='mt-2 mb-2'>
                    <Link to="/">
                        <button className='btn btn-primary'>Read Data</button>
                    </Link>
                </div>
                <form action="" onSubmit={handleUpdate}>
                    <div className="form-group">
                        <label htmlFor="">Enter Name: </label>
                        <input type="text" placeholder='Name' className='form-control' 
                        value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Enter Age: </label>
                        <input type="number" placeholder='Age' className='form-control'
                        value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Enter Email: </label>
                        <input type="email" placeholder='Email' className='form-control'
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Enter Country: </label>
                        <input type="text" placeholder='Country' className='form-control'
                        value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value='Update' className='btn btn-primary' />
                </form>
            </div>
        </div>
    </>
  )
}

export default Update
