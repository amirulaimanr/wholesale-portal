import React from "react";
import BuyerSidebar from "./BuyerSidebar";
import BuyerMain from "./BuyerMain";

import "../SupplierDashboard/Style/SupplierMain.css";
import "../SupplierDashboard/Style/SupplierSidebar.css";

const BuyerDashboard = (props) => {
    return (
        <>
            <BuyerSidebar />
            <main className="main-wrap">
                <BuyerMain />
            </main>
        </>
    );
};

export default BuyerDashboard;
