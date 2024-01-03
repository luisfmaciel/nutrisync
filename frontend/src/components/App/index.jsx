import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "../../routes";
import GlobalStyle from "../../assets/styles/global.js";

const router = createBrowserRouter(routes);

const App = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <RouterProvider router={router} />
        </React.Fragment>
    );
};

export default App;
