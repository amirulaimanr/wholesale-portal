import React from "react";
import { useLocation } from "react-router-dom";
import MainLayout from "./MainLayout";
import ProductLayout from "./ProductLayout";
import SupplierLayout from "./SupplierLayout";

const LayoutSelector = ({ children }) => {
    const location = useLocation();

    switch (true) {
        case location.pathname.startsWith("/supplier-dashboard"):
            return <SupplierLayout>{children}</SupplierLayout>;
        case location.pathname.startsWith("/buyer-center"):
        case location.pathname.startsWith("/products"):
        case location.pathname.match(/^\/products\/category\/[\w-]+$/):
            return <ProductLayout>{children}</ProductLayout>;
        default:
            return <MainLayout>{children}</MainLayout>;
    }
};

export default LayoutSelector;
