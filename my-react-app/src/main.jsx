import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>hello world 2</h1>
        </div>
    )
}

createRoot(document.getElementById('root')).
render(
    <App/>
)
