import Dashboard from "./pages/Dashboard";
import Home from "./Home";
import NewMenu from "./pages/NewMenu";

export const routes = [
    {
        path: "/",
        element: <Home />,   },
    {
        path: "/dashboard",
        element: <Dashboard />,   },
    {
        path: "/dashboard/meus-cardapios",
        element: <Dashboard />,
    },
    {
        path: "/dashboard/novo-cardapio",
        element: <NewMenu />,
    },
    {
        path: "/dashboard/evolucao",
        element: <Dashboard />,   },
    {
        path: "/dashboard/calculadora-imc",
        element: <Dashboard />,
    },
    {
        path: "/dashboard/perfil",
        element: <Dashboard />,   
    }
];


