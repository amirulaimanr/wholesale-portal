import React from "react";
import SupplierSidebar from "../SupplierSidebar";
import SupplierHeader from "../SupplierHeader";
import EditProductsMain from "../ProductComponents/EditProductsMain";
import products from "../../../data/Products";
import { useParams } from "react-router-dom";

const ProductsEditScreen = ({ match }) => {
    const { id } = useParams();
    // const productId = products.find((p) => p._id === match.params.id);
    return (
        <>
            <SupplierSidebar />
            <main className="main-wrap">
                <SupplierHeader />
                <EditProductsMain productId={id} />
            </main>
        </>
    );
};

export default ProductsEditScreen;
