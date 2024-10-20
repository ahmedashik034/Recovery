import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from './Component/Sign-In/SignIn'
import Recovery from './Component/PasswordRecovery/Recovery'
import SignUp from './Component/SignUp/SignUp'



function App() {

  return (
    <>
      <div>
        {/* <SignIn></SignIn> */}
        {/* <Recovery/> */}
        <SignUp/>
        

        
      </div>
     
    
    </>
  )
}

export default App
