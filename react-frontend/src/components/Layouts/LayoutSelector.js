import React from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "./MainLayout";
import ProductLayout from "./ProductLayout";
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
        case (location.pathname.match(/^\/products\/category\/[\w-]+$/) || {}).input:
            return <ProductLayout>{children}</ProductLayout>;
        default:
            return <MainLayout>{children}</MainLayout>;
    }
};

export default LayoutSelector;
