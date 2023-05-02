import React, { useContext, useState } from 'react'
import "./login.scss"
import { AuthContext } from '../../authContext/AuthContext'
import axios from "axios"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const {dispatch} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("https://netflix-backend-fim6.onrender.com/api/auth/login", { email, password })
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
    } catch (err) {
      setErrorMessage("Wrong email or password. Please try again.")
    }
  }

  const handleEmailFocus = () => {
    setIsEmailFocused(true)
    setErrorMessage("")
  }

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true)
    setErrorMessage("")
  }

  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158" alt="Netflix" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder='Email or phone number'
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleEmailFocus}
            onBlur={() => setIsEmailFocused(false)}
          />
          <input
            type="password"
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            onFocus={handlePasswordFocus}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <button className="loginButton" onClick={handleLogin}>Sign In</button>
          <span>New to Netflix? <b>Sign up now.</b></span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>
          </small>
          {errorMessage && (
            <div className="error-message">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
