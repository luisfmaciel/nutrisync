import Home from "./Home";
import NewMenu from "./pages/NewMenu";
import MyMenu from "./pages/MyMenu";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard/",
        element: <NewMenu />,
    },
    {
        path: "/dashboard/meus-cardapios",
        element: <MyMenu />,
    },
    {
        path: "/dashboard/novo-cardapio",
        element: <NewMenu />,
    },
    {
        path: "/dashboard/evolucao",
        element: <MyMenu />,
    },
    {
        path: "/dashboard/calculadora-imc",
        element: <MyMenu />,
    },
    {
        path: "/dashboard/perfil",
        element: <MyMenu />,
    },
];
