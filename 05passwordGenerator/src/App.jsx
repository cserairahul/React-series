import { useCallback, useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState('false')
  const [characterAllowed, setCharacterAllowed] = useState("false")
  const [password, setPassword] = useState("")
  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass= ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*()_+~`"
    for (let index = 1; index <=length; index++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length,numberAllowed,setPassword])
  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
    <h1 className="text-white text-center my-3">PASSWORD GENERATOR</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="password"
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyPasswordToClipboard} className="bg-blue-500 text-white px-3 py-0.5 shrink-0">Copy</button>
      
    </div>
    <div className="flex text-sm gap-x-2">
      <div className='flex items-center gap-1'>
      <input type="range"
      min={6}
      max={100}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}} />
      <label className="">Length:{length}</label>
      </div>

      <div className='flex items-center gap-1'>
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={()=>{setNumberAllowed((prev) => !prev);}} />
        <label className="" htmlFor="numberInput">Number</label>
      </div>

      <div className='flex items-center gap-1'>
        <input type="checkbox"
        defaultChecked={characterAllowed}
        id='characterInput'
        onChange={()=>{setCharacterAllowed((prev) => !prev);}} />
        <label className="" htmlFor="characterInput">Character</label>
      </div>

      </div>

      
   </div>
    </>
  )
}

export default App
