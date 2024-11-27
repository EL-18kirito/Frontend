import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Home.jsx'
import Inventory from './pages/Inventorylist.jsx'
import Inventorypage from './pages/Inventorylist.jsx'


const router = createBrowserRouter([
  {
    path:"",
    element: <App />,
    children: [
      {
        path:"",
        element: <Homepage />,
      },
      {
        path:"Inventory",
        element: <Inventorypage />,
      },
      {
        path:"profile",
        element: <Inventorypage />,
      },
    ]
  },
  {
    path:"login",
    // element: <h1>Login page</h1>,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
