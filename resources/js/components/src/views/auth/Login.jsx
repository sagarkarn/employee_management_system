import React, { useState } from "react";
import useToken from "../../hooks/useToken";
import AuthRepo from "../../repo/AuthRepo";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { Link } from "react-router-dom";
import ResponseStatus from "../../utils/ResponseStatus";

var repo = new AuthRepo();
function Login(props) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const [token, saveToken] = useToken();

    if (isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useState(null);
    const submitForm = (event) => {
        event.preventDefault();
        repo.login(email, password).then((res) => {
            console.log(res);

            if (res.status != ResponseStatus.OK) {
                return;
            }

            if (res.result["status"] == "success") {
                saveToken(res.result["result"]);
                setState(res.result["result"]);
                dispatch(authActions.login());
            }
        });
    };

    if (state != null) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-primary shadow-lg p-10 rounded-lg">
                <form onSubmit={submitForm}>
                    <label className="block">
                        <span className="block text-sm font-medium">Email</span>
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label className="block mt-2">
                        <span className="block text-sm font-medium">
                            Password
                        </span>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs "
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                    <div className="text-center mt-2">
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    don't have account?{" "}
                    <Link to={"/register"} className="link">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}

Login.prototype = {
    onLogin: PropTypes.func.isRequired,
};

export default Login;
