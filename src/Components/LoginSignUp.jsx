import React, {useState} from 'react'
import './LoginsignUp.css'
import logoi from '../assets/react.svg'


const LoginSignUp = () => {
    const [action, setAction] = useState('Sign Up')
  return (
    <div className='Father'>
        <div className="container">
        <h1 className='heading1'>{action}</h1>
            <div className="inputs">
                {action==="Log In"?<div></div>:<input type="text"  placeholder='Name'/>}
                
                <input type="email" placeholder='Email' />
                <input type="text"  placeholder='Password'/>
            </div>
            <div className="buttons">
                <button className={action==="Log In"?'purple gray':'purple'} onClick={()=> {setAction("Sign Up")}}>Sign Up</button>
                <button className={action==='Sign Up'?'purple gray':'purple'} onClick={()=> {setAction("Log In")}}>Log In</button>
            </div>
        </div>   
    </div>
  )
}

export default LoginSignUp