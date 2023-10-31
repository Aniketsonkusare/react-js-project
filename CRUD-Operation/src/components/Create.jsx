import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [email,setEmail] = useState('');
    const [country,setCountry] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/details',{
            myName: name,
            myAge: age,
            myEmail: email,
            myCountry: country
        }).then(()=>{
            navigate('/');
        })
    }

  return (
    <>
        <div className="row">
            <div className="col-md-4">
                <div className='p-4 text-center'>
                    <h1>Create data</h1>
                </div>
                <div className='mt-2 mb-2'>
                    <Link to="/">
                        <button className='btn btn-primary'>Read Data</button>
                    </Link>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">Enter Name: </label>
                        <input type="text" placeholder='Name' className='form-control' 
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Enter Age: </label>
                        <input type="number" placeholder='Age' className='form-control'
                        onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Enter Email: </label>
                        <input type="email" placeholder='Email' className='form-control'
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Enter Country: </label>
                        <input type="text" placeholder='Country' className='form-control'
                        onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <br />
                    <input type="submit" value='Submit' className='btn btn-primary' />
                </form>
            </div>
        </div>
    </>
    )
}

export default Create
