import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter,setCounter] = useState(5)

  const addValue =() =>{
    
    counter = counter + 1
    setCounter(counter)
    console.log("value added",counter);
  }
  const removeValue =() =>{
    counter = counter - 1
    setCounter(counter)
    console.log("value removed",counter);
  }

  return (
    <>
      <h1>Learn React</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick = {addValue}
      >Add value </button>
      <br />
      <button
      onClick = {removeValue}
      >Remove value </button>
    </>
  )
}

export default App
