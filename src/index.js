import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { createBrowserRouter, BrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Article from "./containers/article/article";
import Err404 from "./containers/err404/err404";
import HeaderContent from "./shared/header/header";
import FooterContent from "./shared/footer/footer";


// Rendering shared content
const header = createRoot(document.querySelector('header'))
const footer = createRoot(document.querySelector('footer'))

header.render (
    <React.StrictMode>
        <Router>
            <HeaderContent />
        </Router>
    </React.StrictMode>

)

footer.render(
    <React.StrictMode>
        <FooterContent />
    </React.StrictMode>

)

// Routing for main element content
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Err404 />,
    },
    {
        path: "/About",
        element: <About />,
    },
    {
        path: "/articles/:id",
        element: <Article />,
    },

]);

const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);




