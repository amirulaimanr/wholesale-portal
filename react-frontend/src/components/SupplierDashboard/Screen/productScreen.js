import React from "react";
import SupplierSidebar from "../SupplierSidebar";
import SupplierHeader from "../SupplierHeader";
import SupplierMain from "../SupplierMain";
import MainProducts from "../ProductComponents/MainProducts";

const ProductScreen = () => {
    return (
        <>
            <SupplierSidebar />
            <main className="main-wrap">
                <SupplierHeader />
                <MainProducts />
            </main>
        </>
    );
};

export default ProductScreen;
