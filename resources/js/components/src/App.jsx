import axios from "axios";
import React, { useEffect } from "react";
import {
    Routes,
    Route,
    Navigate,
    useLocation,
    BrowserRouter,
} from "react-router-dom";
import useToken from "./hooks/useToken";
import AuthRepo from "./repo/AuthRepo";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Home from "./views/landing/Home";
import { useDispatch, useSelector } from "react-redux";
import routes from "./Route";
import Container from "./views/layout/Container";
import { authActions } from "./store/auth-slice";
import ResponseStatus from "./utils/ResponseStatus";
import EmployeeIndex from "./views/employee/EmployeeIndex";
import EmployeeView from "./views/employee/employee_view/EmployeeView";
import EmployeeAdd from "./views/employee/employee_add/EmployeeAdd";

let repo;
const publicRoute = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/Register",
        element: <Register />,
    },
];

let unlisten;

function App(props) {
    const [token, setToken] = useToken();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        console.log("i am here");
        if (repo == null) {
            repo = new AuthRepo(token);
        }
        if (token && isLoggedIn) {
            repo.user().then((res) => {
                console.log(res);
                if (res.status == ResponseStatus.UNAUTHORISE) {
                    dispatch(authActions.logout());
                    setToken(null);
                }
            });
        }

        return () => {};
    }, []);

    if (token != null) {
        dispatch(authActions.login());
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route index element={<Home />} />
                <Route path="/employee/">
                    <Route index element={<EmployeeIndex />} />
                    <Route path=":id" element={<EmployeeView />} />
                    <Route path="add" element={<EmployeeAdd />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
