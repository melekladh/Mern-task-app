import React, { useRef } from 'react'
import { UserRegister } from '../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
  const email=useRef()
  const password=useRef()
const dispatch=useDispatch()
const {error}=useSelector(state=>state.user)
  return (
    <div>
    <input type='email' placeholder='type your email' ref={email}></input>
    <input type='password' placeholder='type your password'ref={password}></input>
    <button onClick={()=>dispatch(UserRegister({
      email:email.current.value,
      password:password.current.value
       }))}>register</button>
    {error&& <h1>{error}</h1>}
   

  </div>
  )
}

export default Register