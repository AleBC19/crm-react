import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout.jsx'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente.jsx'
import Index, {loader as clientesLoader} from './pages/Index.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import EditarCliente, {loader as editarClientesLoader, action as ediatarClienteAction} from './pages/EditarCliente.jsx'
import { action as eliminarClienteAction } from './components/Clientes.jsx'


const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />, 
    children: [
      {
        index: true, 
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPage/>
      },
      {
        path: '/clientes/nuevo', 
        element: <NuevoCliente/>,
        action: nuevoClienteAction, 
        errorElement: <ErrorPage/>
      }, 
      {
        path: '/clientes/:clienteId/editar', 
        element: <EditarCliente/>,
        loader: editarClientesLoader,
        action: ediatarClienteAction,
        errorElement: <ErrorPage />, 
      }, 
      {
        path: '/clientes/:clienteId/eliminar', 
        action: eliminarClienteAction,
      }
    ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
      router={router} />
  </React.StrictMode>
)
