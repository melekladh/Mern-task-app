import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../redux/slices/userSlice'
const Navbar = () => {
  const {isAuth}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  return (
    <>
    {isAuth?
    <><Link to='/profile' >profile</Link>
        <button   onClick={()=> dispatch(logout()) } >logout</button>
    </>:
        <>
      
   <Link to='/login' >login</Link>
    <Link to='/register' >register</Link>
    </>
  }
 
</>
  )
}

export default Navbar