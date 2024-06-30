import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profiles from './components/Profiles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Alvish Varsani</h1>
      <Login/>
      <Profiles/>
    </UserContextProvider>
  )
}

export default App
