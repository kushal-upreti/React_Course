import React, {useState, useContext} from "react";
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser({username, password})
    }
    return(
        <>
        <div className="">
            <h2 className="">Login</h2>
            <input type="text" className="" value={username} placeholder="username" onChange={(e)=>{setUsername(e.target.value)}}/>
            <br></br><input type="password" value={password} className="" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="" onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default Login