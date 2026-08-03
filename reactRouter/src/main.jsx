import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/ContactUs.jsx'

//we can use loader to make a data fetch from api appear faster
const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout />,
      children:[
        {
          path: "",
          element:<Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contactus",
          element: <Contact />
        }
      ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
