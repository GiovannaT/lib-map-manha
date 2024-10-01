import React from 'react'
import App from './App.tsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Books } from './pages/Books/index.tsx'
import Signup  from './pages/Signup/index.tsx'
import BookDetails from './pages/BookDetails/index.tsx';
import ForgotPassword from './pages/ForgotPassword/index.tsx';
import { Menu } from './pages/Menu/index.tsx'
import ForgotPassword from './pages/ForgotPassword/index.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/books',
    element: <Books/>
  },
  {
    path: '/SignUp',
    element: <Signup/>
  },
  {
    path: '/books/:id',
    element: <BookDetails />
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />
  }
]);

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element.");
}