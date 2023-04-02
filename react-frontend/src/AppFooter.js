import React from "react";
import logo from "./assets/media/logo2.png";

export const AppFooter = (props) => {
    return (
        <div className="layout-footer">
            <img src={logo} alt="Logo" height="20" className="mr-2" />
            <small>
                by
                <span className="font-bold ml-1">BigOrder.com</span>
            </small>
        </div>
    );
};
