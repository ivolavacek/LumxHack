import './App.css'
import Header from '../header/Header.jsx'
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div className="all">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
