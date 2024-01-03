import Dashboard from "./Dashboard";
import Home from "./Home";

export const routes = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    }
];


