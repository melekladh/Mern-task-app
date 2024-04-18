import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    
    <Link to='/login' >login</Link>
    <Link to='/profile' >profile</Link>
    <Link to='/register' >register</Link>
    <button>logout</button>
</>
  )
}

export default Navbar