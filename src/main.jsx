import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from './pages/Error';
import Layout from './components/Layout';
import Home, { loader as ClientesLoader } from './pages/Home';
import { action as EliminarClienteAction } from './components/Cliente';
import NuevoCliente, { action as AgregarClientesAction } from './pages/NuevoCliente';
import EditarCliente, { action as EditarClienteAction, loader as EditarClienteLoader } from './pages/EditarCliente';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />, loader: ClientesLoader, errorElement: <Error /> },
      { 
        path: '/clientes/nuevo', element: <NuevoCliente />, 
        action: AgregarClientesAction, errorElement: <Error /> 
      },
      { 
        path: '/cliente/:uid/editar', element: <EditarCliente />, 
        loader: EditarClienteLoader, errorElement: <Error />, action: EditarClienteAction
      },
      { path: '/cliente/:uid/eliminar', action: EliminarClienteAction },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
