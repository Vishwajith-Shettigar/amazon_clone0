import React, { useState } from 'react'
import './Login.css'
import {auth} from "./firebase"
import {Link, useNavigate} from "react-router-dom"
function Login() {

const [email,setEmail]= useState('')
const [password, setPassword]= useState('')

const history=useNavigate();
const login=(event)=>{
    event.preventDefault();

auth.signInWithEmailAndPassword(email,password)
.then((auth)=>{

history("/")
})
.catch ((e)=>alert(e.message))
}

const register=(event)=>{
    console.log("Register")
    event.preventDefault();

auth.createUserWithEmailAndPassword(email,password)
.then(auth=>{
    history("/")
})
.catch ((e)=>{
    alert(e.message)

})

}


  return (

    <div className='login'>

<Link to="/" >
    <img  className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>



</Link>

<div className='login__container'>
<h1> Sign in </h1>

<form>
    <h5>Email</h5>
    <input value={email} onChange= { event=> setEmail(event.target.value) } type="email"/>
    <h5>Password</h5>
    <input value={password} onChange={event=>  setPassword(event.target.value)} type="password"/>
    <button onClick={login} type="submit" className='login__signin'>Sign in</button>

</form>
<p className='login__P'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
<p className='login__P'> New to Amazon?</p>
<button onClick={register} className='login__register'>Create your Amazon Account</button>
</div>

    </div>
   
  )
}

export default Login