import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {
    
    const [apidata,setApidata] = useState([])

    function getdata  ()  {
        axios.get('http://localhost:3000/details')
        .then((response) => {
            setApidata(response.data)
        })
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:3000/details/${id}`)
        .then(()=>{
            getdata()
        })
    }

    function setDataToLocalStorage(id,name,age,email,country) {
        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('age',age)
        localStorage.setItem('email',email)
        localStorage.setItem('country',country)
    }
    
    useEffect(()=>{
        getdata()
    },[])

  return (
    <>
        <h1>Read data </h1>
        <div className="row">
            <div className="col-md-12">
                <div className='mt-2 mb-2'>
                    <Link to={'/create'}>
                        <button className='btn btn-primary'>Create Data</button>
                    </Link>
                </div>
                <table className='table table-bordered table-striped table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apidata.map((item)=>{
                                return(
                                    <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.myName}</td>
                                            <td>{item.myAge}</td>
                                            <td>{item.myEmail}</td>
                                            <td>{item.myCountry}</td>
                                            <td>
                                                <Link to='/update'>
                                                    <button className='btn btn-warning'
                                                    onClick={() => setDataToLocalStorage(item.id,item.myName,item.myAge,item.myEmail,item.myCountry)}>Edit</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                            </td>
                                            {/* <td>
                                                <button className='btn btn-danger' onClick={() => {if (window.confirm('Are You Sure To delete data ??')) {handleDelete(item.id)}}}>Delete</button>
                                            </td> */}
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default Read
