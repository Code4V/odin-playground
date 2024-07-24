import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import People from './components/People'
import Spinach from './components/Spinach.jsx'
import { PeopleListContainer } from './components/PeopleListContainer.jsx'
import DefaultProfile from './components/DefaultProfile.jsx'
import ErrorPage from './components/Error.jsx'

const personMock = [{
  name: "John Mclain",
  image: "https://picsum.photos/50",
  email: "mclain@mail.com"
}]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "people",
    element: <PeopleListContainer />,
  },
  {
    path: "person/:id",
    element: <People />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
