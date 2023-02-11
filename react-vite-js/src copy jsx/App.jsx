import { useState } from 'react'
// import { Header } from './components/Header'
import Button from './components/Button'
import Exer from './components/Exer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    return setCount(count+1)
  }

  return (
    <div className="App">
      {/* <h1>Vite + React</h1> */}
      <Exer/>
      <Button count={count} onClick={handleClick}>点击加数1</Button>
      <Button count={count} onClick={handleClick}>点击加数2</Button>
    </div>
  )
}

export default App
