import React from "react";
import SupplierSidebar from "../SupplierSidebar";
import SupplierHeader from "../SupplierHeader";
import MainCategories from "../CategoriesComponents/MainCategories";

const CategoriesScreen = () => {
    return (
        <>
            <SupplierSidebar />
            <main className="main-wrap">
                <SupplierHeader />
                <MainCategories />
            </main>
        </>
    );
};

export default CategoriesScreen;
