import './App.css'
import Header from '../header/Header.jsx'
import { Outlet } from "react-router-dom";


function App() {
  
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
