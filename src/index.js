// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/home";
// import Html from "./pages/html";
// import Css from "./pages/css";
// import Javascript from "./pages/javascript";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <h1> SORRY ....... This Page Not Found </h1>,
//   },

//   {
//     path: "/html",
//     element: <Html />,
//   },

//   {
//     path: "/css",
//     element: <Css />,
//   },
//   {
//     path: "/javascript",
//     element: <Javascript />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

//                هذه الاوامر نفس عمل الاكواد اللي
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {HelmetProvider } from 'react-helmet-async';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>

    <App />

    </HelmetProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);

serviceWorkerRegistration.register();