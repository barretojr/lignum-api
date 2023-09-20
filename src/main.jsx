import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import PaginaFormulario from "./Paginas/Formulario";
import PagLogin from "./Paginas/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
  },
  {
    path: "/formulario",
    element: <PaginaFormulario />,
  },
  {
    path: "/login",
    element: <PagLogin />,
  },
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

