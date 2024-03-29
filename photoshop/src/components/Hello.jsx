import React from "react";

export const Hello = (props) => {
    return (
        <sp-body>Hello, {props.message || "world"} </sp-body>
    );
} 
