import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-200 text-black-900 p-4 rounded-xl mb-4 text-3xl'>Tailwind </h1>
      <Card username="Alvish" btnText="click me" />
      <Card username="Yash" />
    </>
  )
}

export default App