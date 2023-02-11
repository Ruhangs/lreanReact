import { useState } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    return setCount(count+1)
  }

  return (
    <div className="App">
      <Board />
    </div>
  )
}

export default App
