import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToken from "../../hooks/useToken";
import Drawer from "./Drawer";
import NavBar from "./NavBar";
import { authActions } from "../../store/auth-slice";
import { viewActions } from "../../store/view-slice";
import { Navigate } from "react-router-dom";

function Container(props) {
    const [token, setToken] = useToken();
    const activeNav = useSelector((state) => state.view.navActive);
    const dispatch = useDispatch();
    if (!token) {
        dispatch(authActions.logout());
        return <Navigate to={"/login"} />;
    }

    useEffect(() => {
        if (
            window.location.href.includes("employee") &&
            activeNav != "employee"
        ) {
            dispatch(viewActions.activeNav("employee"));
            console.log("employee route");
        }
        return () => {};
    }, []);

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <NavBar />
                {props.children}
            </div>
            <Drawer />
        </div>
    );
}

export default Container;
