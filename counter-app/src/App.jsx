import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // using usestate() hooks to change Ui state.
  let [value, setValue]= useState(0)
  const addValue =() =>{
  setValue(value+1)
  }

  let subtractValue =() =>{
  if(value===0){
    setValue(0)
  }
  else{
  setValue(value-1)
  }
  }
  
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {value}</h2>
      <button onClick={addValue}>Add Vlaue</button>
      <button onClick={subtractValue}>Subtract Vlaue</button>
    </>
  )
}
// Ui change using pure DOM manipulation
/* function App() {
   const addvalue = ()=>{
     let changeValue= document.querySelector("#count")
     let current= Number(changeValue.innerText);
     changeValue.innerText= current+1;
   }
   const subtractvalue = ()=>{
     let changeValue= document.querySelector("#count")
     let current= Number(changeValue.innerText);
     changeValue.innerText= current-1;
   
   return (
     <>
       <h1>Counter App</h1>
       <h2>Counter Value<p id="count">0</p></h2>
       <button onClick={addvalue}>Add Vlaue</button>
       <button onClick={subtractvalue}>Subtract Vlaue</button>
     </>
   )
 }*/

export default App
