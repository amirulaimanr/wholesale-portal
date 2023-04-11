import React from "react";
import SupplierSidebar from "../SupplierSidebar";
import SupplierHeader from "../SupplierHeader";
import OrderMain from "../OrderComponents/OrderMain";

const OrderScreen = () => (
    <>
        <SupplierSidebar />
        <main className="main-wrap">
            <SupplierHeader />
            <OrderMain />
        </main>
    </>
);

export default OrderScreen;
