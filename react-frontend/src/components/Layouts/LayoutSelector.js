import React from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "./MainLayout";
import SupplierLayout from "./SupplierLayout";

const LayoutSelector = ({ children }) => {
    const location = useLocation();

    switch (location.pathname) {
        case "/supplier-dashboard":
        case "/supplier-products":
        case "/add-products":
        case "/supplier-category":
        case "/supplier-orders":
        case "/orders":
        case "/supplier-users":
            return <SupplierLayout>{children}</SupplierLayout>;
        default:
            return <MainLayout>{children}</MainLayout>;
    }
};

export default LayoutSelector;
