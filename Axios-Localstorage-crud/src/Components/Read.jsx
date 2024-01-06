import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {

    const [data,setData] = useState([])

    const adddata = () => {
        axios.get('http://localhost:3000/details')
        .then((res) => setData(res.data))
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/details/${id}`)
        .then(()=>{
            adddata()
        })
    }

    function setDataToLocalStorage(id,name,surname,country,occupation) {
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('surname',surname)
        localStorage.setItem('country',country)
        localStorage.setItem('occupation',occupation)
    }

    useEffect(() => {
        adddata();
    },[])

  return (
    <>
        <div className="container">
        <h1>Read data</h1>
        <Link to={'/create'} className='text-decoration-none'>
            <h1><button className='btn btn-primary'>Create date</button></h1>
        </Link>
            <div className="col">
                <div className="row">
                    <table className='table table-bordered'>
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Country</th>
                            <th>Occupation</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </thead>
                        <tbody>
                            {
                                data.map((ele) => {
                                    return(
                                        <tr>
                                            <td>{ele.id}</td>
                                            <td>{ele.name}</td>
                                            <td>{ele.surname}</td>
                                            <td>{ele.country}</td>
                                            <td>{ele.occupation}</td>
                                            <Link to={'/update'}>
                                            <td>
                                                <button  className='btn btn-warning'
                                                onClick={() => setDataToLocalStorage(ele.id,ele.name,ele.surname,ele.country,ele.occupation)}>Edit</button>
                                            </td>
                                            </Link>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => handleDelete(ele.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Read
