import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import App from './App.jsx'
import MenuPrincipal from './assets/pages/MenuPrincipal.jsx';
import SelecaoMapa from './assets/pages/SelecaoMapa';
import JogoPag from './assets/pages/JogoPag';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuPrincipal />,
  },
  {
    element: <App />, 
    children: [
      {
        path: '/selecao-mapa',
        element: <SelecaoMapa />,
      },
      {
        path: '/jogo',
        element: <JogoPag />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
