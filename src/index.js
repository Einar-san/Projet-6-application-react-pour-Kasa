import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import HeaderContent from "./shared/header/header";
import FooterContent from "./shared/footer/footer";
import router from "./routes";

// Rendering shared content
const header = createRoot(document.querySelector('header'))
const footer = createRoot(document.querySelector('footer'))

// Get the header element
header.render (
    <React.StrictMode>
        <Router>
            <HeaderContent />
        </Router>
    </React.StrictMode>
)

// Get the footer element
footer.render(
    <React.StrictMode>
        <FooterContent />
    </React.StrictMode>
)


const root = createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


