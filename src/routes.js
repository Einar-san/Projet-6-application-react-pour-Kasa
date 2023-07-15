import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Article from "./containers/article/article";
import Err404 from "./containers/err404/err404";

const routes = [
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
    {
        path: "/error",
        element: <Err404 />,
    },
];

const router = createBrowserRouter(routes);

export default router;