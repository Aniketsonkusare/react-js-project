import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Create() {

    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [country,setCountry] = useState("")
    const [occupation,setOccupation] = useState("")

    const navigate = useNavigate()

    function submitdata() {

        axios.post('http://localhost:3000/details',{
            name: name,
            surname: surname,
            country: country,
            occupation: occupation
        }).then(() => {
            navigate('/')
        })
    }

  return (
    <>
        <div className="container">
        <h1>Create data</h1>
            
        <Link to={'/'} className='text-decoration-none'>
            <h1><button className='btn btn-primary'>read date</button></h1>
        </Link>
        
        <form onSubmit={submitdata}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Surname</label>
                <input type="text" className="form-control" onChange={(e) => setSurname(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                <input type="text" className="form-control" onChange={(e) => setCountry(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Occupation</label>
                <input type="text" className="form-control" onChange={(e) => setOccupation(e.target.value)}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
        
        </div>
    </>
  )
}

export default Create
