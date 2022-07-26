import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function TogglePasswordEye({ toogle }) {
    const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        toogle(!isVisible);
        setIsVisible(!isVisible);
    };
    return (
        <span onClick={handleClick}>
            {isVisible && <FaEyeSlash />}
            {!isVisible && <FaEye />}
        </span>
    );
}

export default TogglePasswordEye;
