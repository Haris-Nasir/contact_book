import React from 'react'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <div style={{textAlign:'center'}}>
        <h1>404 Error</h1>
        <p>The page you are looking for is not available</p>
        <Link to={'/'} className='btn btn-primary'>Go back to home</Link>
    </div>
  )
}

export default Notfound