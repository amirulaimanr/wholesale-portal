import React from "react";
import SupplierSidebar from "../SupplierSidebar";
import SupplierHeader from "../SupplierHeader";
import OrderDetailsMain from "../OrderComponents/OrderDetailsMain";

const OrderDetailsScreen = () => (
    <>
        <SupplierSidebar />
        <main className="main-wrap">
            <SupplierHeader />
            <OrderDetailsMain />
        </main>
    </>
);

export default OrderDetailsScreen;
