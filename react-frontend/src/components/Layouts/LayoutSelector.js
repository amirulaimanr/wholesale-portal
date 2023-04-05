import React from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "./MainLayout";
import SupplierLayout from "./SupplierLayout";

const LayoutSelector = ({ children }) => {
    const location = useLocation();

    if (location.pathname === "/supplier-dashboard") {
        return <SupplierLayout>{children}</SupplierLayout>;
    } else {
        return <MainLayout>{children}</MainLayout>;
    }
};

export default LayoutSelector;
