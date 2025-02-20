import { useState } from 'react'

import './App.css'
import UseContext from './components/UseContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <UseContext/>
    </>
  )
}

export default App
