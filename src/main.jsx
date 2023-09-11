import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SingupPage from '../Pages/SingupPage/SingupPage.jsx';
import LoginPage from '../Pages/LoginPage/LoginPage.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "singupPage",
    element:<SingupPage />,
  },
  {
    path: "loginPage",
    element:<LoginPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <RouterProvider router={router} />
  <ToastContainer />
  </div>
)
