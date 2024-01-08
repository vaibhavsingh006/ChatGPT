import { useState } from 'react'
import './App.css'
import ChatGPT from './Components/ChatGPT'

// ------------ LogIn and SignUp page ----------------
// import LoginSignUp from './Components/LoginSignUp.jsx'

function App() {
  const [count, setCount] = useState(0)
  // const [my, setMy] = useState(nope)

  return (
    <>
      {/* <LoginSignUp /> */}
      <ChatGPT />
    </>
  )
}

export default App
