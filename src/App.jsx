import {createBrowserRouter,RouterProvider} from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import { About, Contact, Home } from "./pages"

function App() {
 
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
         {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])

  return <RouterProvider router={routes}/>
}

export default App