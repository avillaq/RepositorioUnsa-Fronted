import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './components/Home';
import { SearchResults } from './pages/SearchResults';
import { Profile } from './pages/Profile';
import './styles/global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/resultados',
    element: <SearchResults />,
  },
  {
    path: '/perfil',
    element: <Profile />,
  }
], {
  future: {
    v7_partialHydration: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} future={{ v7_startTransition: true,}}
/>
  </StrictMode>,
)
