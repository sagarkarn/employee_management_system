import React from "react";
import { Route, Routes } from "react-router-dom";

function EmployeeRoute() {
    const routes = [
        {
            paht: "/:id",
            element: <EmployeeView />,
        },

        {
            index: true,
            element: <EmployeeIndex />,
        },
    ];
    return (
        <Routes>
            {routes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route {...rest} element={element} key={index} />;
            })}
        </Routes>
    );
}

export default EmployeeRoute;
