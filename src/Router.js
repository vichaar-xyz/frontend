import { Route, Routes, Outlet } from "react-router-dom";
import React from "react";
import routes from "./routes";
import HomePage from "./containers/Homepage";

const Router = () => {
    return (
        <div className="content scroll_bar">
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        exact
                        element={route.element}
                        path={route.path}
                    />
                ))}
                <Route exact element={<HomePage />} path="*" />
            </Routes>
        </div>
    );
};

export default Router;
