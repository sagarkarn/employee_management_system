import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { viewActions } from "../../store/view-slice";

function Drawer() {
    const activeNav = useSelector((state) => state.view.navActive);
    const dispatch = useDispatch();

    console.log("active nav", activeNav);
    return (
        <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content ">
                <div className="btn btn-ghost">Employee Management System</div>
                <li>
                    <Link
                        to={"/"}
                        className={activeNav == "dashboard" ? "active" : ""}
                        onClick={() => {
                            dispatch(viewActions.activeNav("dashboard"));
                        }}
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to={"/employee"}
                        className={activeNav == "employee" ? "active" : ""}
                        onClick={() => {
                            dispatch(viewActions.activeNav("employee"));
                        }}
                    >
                        Employee
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Drawer;
