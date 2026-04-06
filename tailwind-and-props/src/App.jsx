import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj=[1,2,3,4,5]

  return (
    <>
  <Card username= "Kushal" />
  <Card username= "Jason"/>
    </>
  )
}

export default App
