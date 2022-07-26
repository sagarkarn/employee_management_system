import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import TogglePasswordEye from "./components/TogglePasswordEye";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);
    const submitForm = () => {};

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-primary shadow-lg p-10 rounded-lg">
                <form onSubmit={submitForm}>
                    <label className="block">
                        <span className="block text-sm font-medium">Name</span>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setName(e.target.value)}
                            required
                            value={name}
                        />
                    </label>
                    <label className="block">
                        <span className="block text-sm font-medium">Email</span>
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
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
                            required
                        />
                    </label>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <label className="input-group">
                            <input
                                type={
                                    isConfirmPasswordVisible
                                        ? "password"
                                        : "text "
                                }
                                placeholder="Confirm Password"
                                className="input input-bordered"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                value={confirmPassword}
                                required
                            />
                            <TogglePasswordEye
                                toogle={(val) =>
                                    setIsConfirmPasswordVisible(val)
                                }
                            />
                        </label>
                    </div>

                    <div className="text-center mt-2">
                        <button type="submit" className="btn">
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="text-center">
                    Already have account?{" "}
                    <Link to={"/login"} className="link">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
