import React from 'react'

function Scroll(props) {
  return (
    <>
        <div style={{ height: '100vh'}}>
            {props.children}
        </div>
    </>
  )
}

export default Scroll
