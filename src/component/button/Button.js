import React from "react";

function Button(props) {
    const { type, label, handleClick } = props;

    return (
        <button onClick={handleClick} type={type}>
            {label}
        </button>
    );
}

export default Button;
