import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/Home.page';
import { PacientesPage } from './pages/Pacientes.page';
import { PacientePage } from './pages/Paciente.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/pacientes',
    element: <PacientesPage />
  },
  {
    path: '/pacientes/:id',
    element: <PacientePage />
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
