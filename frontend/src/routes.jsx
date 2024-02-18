// import Home from "./Home";
import NewMenu from "./pages/NewMenu";
import MyMenu from "./pages/MyMenu";
import Register from "./pages/Register";

export const routes = [
    {
        path: "/",
        element: <Register />,
    },
    {
        path: "/dashboard/",
        element: <MyMenu />,
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
