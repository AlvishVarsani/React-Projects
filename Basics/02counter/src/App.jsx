import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(0)
    }
   
  }
  

  return (
    <>
      
      <h1>Alvish chai aur code with hitesh choudhary</h1>
      <h2>Counter Value:{counter}</h2>
      <button  onClick={(addValue)}>Add Value:{counter}</button>
      <br></br>
      <button  onClick={removeValue}>Remove value:{counter}</button>
    </>
  )
}

export default App
