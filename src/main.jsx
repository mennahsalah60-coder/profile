import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './pages/About/About.jsx'
import Home from './pages/Home/Home.jsx'
import Root from './Root.jsx'
import Book from './pages/Books/Book.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Context from './components/context.jsx';
import Profile from './pages/profile/profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/book",
        Component: Book,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: '/profile',
        Component: Profile
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ]
  },
]);


const root = document.getElementById("root");


createRoot(root).render(
  <StrictMode>
    <Context>
      <RouterProvider router={router} />,
    </Context>
  </StrictMode>
)




