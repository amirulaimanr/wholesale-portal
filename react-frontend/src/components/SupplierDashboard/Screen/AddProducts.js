import React from "react";
import SupplierSidebar from "../SupplierSidebar";
import SupplierHeader from "../SupplierHeader";
import AddProductsMain from "../ProductComponents/AddProductsMain";

const AddProducts = () => {
    return (
        <>
            <SupplierSidebar />
            <main className="main-wrap">
                <SupplierHeader />
                <AddProductsMain />
            </main>
        </>
    );
};

export default AddProducts;
