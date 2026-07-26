import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  // using useref hook 

  const paswdRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (number) str += "0123456789"
    if (character) str += "!@#$%^&*"
    
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    
    setPassword(pass)
    
  }, [length, character, number, setPassword]) //these dependenciy is put here so that 
  //if any of them get changed fucntion in recreated
  
  const copyToClipboard = useCallback(() => {
    paswdRef.current?.select()
    window.navigator.clipboard.writeText(password)//ti is used to copy something
  }, [password])


  useEffect(() =>{
    passwordGenerator()
  }, [length, number, character]) //this useEffect make sure that if the given dependencies
  // is interacted with then it calling passwordgenerator function
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            ref={paswdRef}
            placeholder="Password"
            readOnly
            className="outline-none w-full py-1 px-3 rounded-lg text-gray-900 bg-white mb- mt-4" />
          <button 
          className=" outline-none px-3 bg-blue-700 text-white mt-4 ml-2 rounded-lg"
          onClick={copyToClipboard}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 mb-4">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="" className="text-white">Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input 
            type="checkbox" defaultChecked= {number} id='numberInput' className=""
            onChange= {() => {
              setNumber((prev) => !prev)
            }}
             />
            <label htmlFor="" className="text-white">number</label>
          </div>
          <div className="flex items-center gap-x-1 mb-4">
            <input 
            type="checkbox" defaultChecked= {character} id='numberInput' className="" 
            onChange= {() => {
              setCharacter((prev) => !prev)
            }}
            />
            <label htmlFor="" className="text-white">character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
