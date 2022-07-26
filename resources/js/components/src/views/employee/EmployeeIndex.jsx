import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import useToken from "../../hooks/useToken";
import EmployeeRepo from "../../repo/EmployeeRepo";
import { CgOptions } from "react-icons/cg";
import { GrUserFemale, GrUser } from "react-icons/gr";
import ResponseStatus from "../../utils/ResponseStatus";
import { authActions } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../layout/Container";

function EmployeeIndex() {
    const [token, setToken] = useToken();
    const dispatch = useDispatch();
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        const repo = new EmployeeRepo(token);
        repo.getAll().then((res) => {
            if (res.status == ResponseStatus.UNAUTHORISE) {
                setToken(null);
                dispatch(authActions.logout());
            } else if (res.status == ResponseStatus.OK) {
                console.log(res);
                setEmployee(res.result);
            }
        });
    }, []);

    return (
        <Container>
            <div className="p-4">
                <div className="text-right">
                    <Link to={"/employee/add"} className="btn btn-primary">
                        <BsPlus className="h-6 w-6" />
                        Add Employee
                    </Link>
                </div>
                <div className=" w-full mt-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Contact</th>
                                <th>Job Role</th>
                                <th>Code</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employee != null &&
                                employee?.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar placeholder">
                                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                            <span className="text-xl uppercase">
                                                                {value.user
                                                                    .gender ==
                                                                "M" ? (
                                                                    <GrUser stroke="#fff" />
                                                                ) : (
                                                                    <GrUserFemale />
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">
                                                            {
                                                                value.user
                                                                    .first_name
                                                            }{" "}
                                                            {
                                                                value.user
                                                                    .last_name
                                                            }
                                                        </div>
                                                        <div className="text-sm opacity-50">
                                                            United States
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {value.user.mobile}
                                                <br />
                                                <span className="badge badge-ghost badge-sm">
                                                    {value.user.email}
                                                </span>
                                            </td>
                                            <td>{value?.job?.name}</td>
                                            <td>{value.code}</td>
                                            <th>
                                                <div className="dropdown dropdown-end">
                                                    <label
                                                        tabIndex={0}
                                                        className="btn btn-primary m-1"
                                                    >
                                                        <CgOptions />
                                                    </label>
                                                    <ul
                                                        tabIndex={0}
                                                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                                                    >
                                                        <li>
                                                            <Link
                                                                to={
                                                                    "/employee/edit/" +
                                                                    value.user
                                                                        .id
                                                                }
                                                            >
                                                                Edit
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to={
                                                                    "/employee/" +
                                                                    value.user
                                                                        .id
                                                                }
                                                            >
                                                                View
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </th>
                                        </tr>
                                    );
                                })}
                        </tbody>

                        <tfoot>
                            <tr>
                                <th>Full Name</th>
                                <th>Contacts</th>
                                <th>Job Role</th>
                                <th>Code</th>
                                <th>Actions</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </Container>
    );
}

export default EmployeeIndex;
