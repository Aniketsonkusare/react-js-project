import React from 'react'

function Card({person}) {
  return (
    <>
        <div className="d-flex flex-row bd-highlight mb-3">
            <img style={{height:"50px", width:"50px"}} className='br-100 h3 w3 dib' src={person.imgPath} alt={person.name} />
            <div>
                <h2>{person.name}</h2>
                <p>{person.email}</p>
            </div>
        </div>
    </>
  )
}

export default Card
