import React, { useRef, useState } from 'react'
import { useNavigate } from "react-router-dom"
import "./register.scss"
import axios from "axios"

export default function Register() {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [username, setUsername] = useState("")
 const navigate = useNavigate()

 const emailRef = useRef()
 const passwordRef = useRef()
 const usernameRef = useRef()
 const handleStart = () => {
  setEmail(emailRef.current.value)
 }
 const handleFinish = async (e) => {
  
e.preventDefault()  
setPassword(passwordRef.current.value)
setUsername(usernameRef.current.value)
  try{
    await axios.post("https://netflix-backend-fim6.onrender.com/api/auth/register", {email, username, password})
    navigate("/login")
  }catch(err){
    
  }

 }
  return (
    <div className='register'>
     <div className="top">
      <div className="wrapper">
     <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix" />
      <a href="/login" className="loginButton">Sign In</a>
      </div>
     </div>
     <div className="container">
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere, Cancel anytime.</h2>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      {!email ?(
      <div className="input">
       <input type="email" placeholder='Email address' ref={emailRef}/>
       <button className="registerButton" onClick={handleStart}>Get Started</button>
      </div>) : (
      <form className="input">
       <input type="username" placeholder='UserName' ref={usernameRef}/>
       <input type="password" placeholder='Password' ref={passwordRef}/>
       <button className="registerButton" onClick={handleFinish}>Start</button>
      </form>
      )}
     </div>
    </div>
  )
}
