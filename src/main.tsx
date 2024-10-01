import React from 'react'
import App from './App.tsx'
import './index.css'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Books } from './pages/Books/index.tsx'
<<<<<<< HEAD
import BookDetails from './pages/BookDetails/index.tsx';
=======
import { Menu } from './pages/Menu/index.tsx'

>>>>>>> feature

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
<<<<<<< HEAD
    path: '/books/:id',
    element: <BookDetails />
=======
    path: '/menu',
    element: <Menu/>
>>>>>>> feature
  },
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