import Dashboard from "./pages/Dashboard";
import Home from "./Home";

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
        element: <Dashboard />,
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


