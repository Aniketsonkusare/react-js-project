import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Read() {

    const [id,setId] = useState(0);
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [country,setCountry] = useState('');  
    const [occupation,setOccupation] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setSurname(localStorage.getItem('surname'))
        setCountry(localStorage.getItem('country'))
        setOccupation(localStorage.getItem('occupation'))
    },[])

    const handleUpdate = ((e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/details/${id}`,{
            name: name,
            surname: surname,
            country: country,
            occupation: occupation  
        }).then(() => {
            navigate('/')
        })
    })

  return (
    <>
        <div className="container">
            <h1>Update data</h1>
        <form onSubmit={handleUpdate}>
            <Link to={'/'} className='text-decoration-none'>
            <h1><button className='btn btn-primary'>read date</button></h1>
        </Link>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Surname</label>
                <input type="text" className="form-control" value={surname} onChange={(e) => setSurname(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Country</label>
                <input type="text" className="form-control" value={country} onChange={(e) => setCountry(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Occupation</label>
                <input type="text" className="form-control" value={occupation} onChange={(e) => setOccupation(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
        </div>
    </>
  )
}

export default Read
