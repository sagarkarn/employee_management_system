import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import EmployeeIndex from "./views/employee/EmployeeIndex";
import EmployeeRoute from "./views/employee/route/EmployeeRoute";
import Home from "./views/landing/Home";

const routes = [
    {
        index: true,
        element: <Home />,
    },
    {
        paht: "/employee/*",
        element: <EmployeeRoute />,
    },
];

export default routes;
