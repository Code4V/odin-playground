import React from 'react'
import Favorite from './Favorite.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const fruits = [
  {
    name: "Strawberry",
    description: "Very sweet and tangy",
  },
  {
    name: "Banana",
    description: "Long and pleasant to eat",
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Favorite fruits={fruits}/>
  </React.StrictMode>,
)
