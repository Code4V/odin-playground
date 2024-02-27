import React from 'react'
import Favorite from './Favorite.jsx'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { v4 as uuid4 } from 'uuid';

import './index.css'

const fruits = [
  {
    name: "Strawberry",
    description: "Very sweet and tangy",
    id: uuid4(),
  },
  {
    name: "Banana",
    description: "Long and pleasant to eat",
    id: uuid4(),
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Favorite fruits={fruits}/>
  </React.StrictMode>,
)
