import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Clock from './components/clock'
import './App.css'
import Input from './components/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Clock />
      <Input />
    </>
  )
}

export default App
