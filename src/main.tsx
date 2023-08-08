import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import GlobalStyle from './styles/globalStyle.tsx'
import App from './App.tsx'
import Error from './pages/Error.tsx'
import Home from './pages/Home.tsx'
import Usuario from './pages/Usuario.tsx'
import Profissional from './pages/Profissional.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/pessoa-usuaria',
        element: <Usuario />
      },
      {
        path: '/profissional',
        element: <Profissional />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
