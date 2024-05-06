import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/app/App.jsx'
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Dash from './components/dash/Dash.jsx';
import Contract from './components/contract/Contract.jsx';
import Register from './components/register/Register.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dash",
        element: <Dash />,
      },
      {
        path: "/contract",
        element: <Contract />,
      },
      {
        path: "/register",
        element: <Register />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
