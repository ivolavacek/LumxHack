import { useState } from 'react'
import reactLogo from '../../images/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
