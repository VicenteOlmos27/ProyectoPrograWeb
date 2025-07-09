import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Inicio from "./views/Inicio";
import IngresarArriendos from "./views/IngresarArriendo";
import Activos, { loader as loaderActivos } from "./views/Activos";
import Estadisticas from "./views/Estadisticas";
import CrearUsuario from "./views/CrearUsuario";
import Login, { action as loginAction } from "./views/Login";

import PrivateRouter from "./components/PrivateRouter";
import ArriendosTerminados from "./views/Terminados";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "Crear",
    element: <CrearUsuario />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        element: <PrivateRouter />,
        children: [
          {
            index: true,
            element: <Inicio />,
          },
          {
            path: "Inicio",
            element: <Inicio />,
          },
          {
            path: "IngresarArriendos",
            element: <IngresarArriendos />,
          },
          {
            path: "activos",
            element: <Activos />,
            loader: loaderActivos,
          },
          {
            path: "Estadisticas",
            element: <Estadisticas />,
          },
          {
            path: "Terminados",
            element: <ArriendosTerminados />,
          },
        ],
      },
    ],
  },
]);
