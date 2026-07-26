import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-3xl">
            <button onClick={()=> setColor("red")} className="outline-none px-4 bg-red-600 rounded-full text-white shadow-sm">Red</button>
            <button onClick={()=> setColor("green")} className="outline-none px-4 bg-green-600 rounded-full text-white shadow-sm">Green</button>
            <button onClick={()=> setColor("blue")} className="outline-none px-4 bg-blue-600 rounded-full text-white shadow-sm">Blue</button>
            <button onClick={()=> setColor("purple")} className="outline-none px-4 bg-purple-600 rounded-full text-white shadow-sm">Purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
