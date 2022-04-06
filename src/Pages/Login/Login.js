import React from 'react'
import "./Login.css"
import Man from "../../assets/sitting.svg"
import { useState } from 'react'

function Login({addUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const handleClick = () => {
    addUser({username, password})
  }



  return (
    <div className='logindiv'>
        <div className='input'>
            <img src={Man} alt="" className='image'/>
            <input type="text" name='username' onChange={(e) => setUsername(e.target.value)} className = "inputt" placeholder='USERNAME'/>
            <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} className = "inputt" placeholder='PASSWORD'/>
            <button onClick={() => handleClick()} className = "logınbutton">LOG IN</button>
        </div>
    </div>
  )
}

export default Login