import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './stylus/Reset.styl';
import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ErrorPage } from './components/Error.jsx';
import Main from './components/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/Projects',
        element: <div> Projects Placeholder </div>
      },
      {
        path: '/Contact',
        element: <div> Contact Placeholder </div>
      },
    ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
