import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='absolute inset-0 -z-10 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'>
        <Nav />
      </div>
    </>
  )
}

export default App
