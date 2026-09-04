import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Template from './components/Template'
import Services from './components/services'
import Welcome from './components/Welcome'
import Error from './components/Error'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path:"/welcome/:username",
          element:<Welcome/>
        },
        {
          path: "/*",
          element: <Error />
        }
      ]
      
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
