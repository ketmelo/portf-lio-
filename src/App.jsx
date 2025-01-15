import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Contato from "./components/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Contato",
    element: <Contato/>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
