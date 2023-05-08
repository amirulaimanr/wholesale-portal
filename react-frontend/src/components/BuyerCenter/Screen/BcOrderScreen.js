import React from "react";
import BuyerSidebar from "../BuyerSidebar";
import BcOrderMain from "../BCOrderComponent/BcOrderMain";

import "../../SupplierDashboard/Style/SupplierMain.css";
import "../../SupplierDashboard/Style/SupplierSidebar.css";

const BcOrderScreen = (props) => {
    return (
        <>
            <BuyerSidebar />
            <main className="main-wrap">
                <BcOrderMain />
            </main>
        </>
    );
};

export default BcOrderScreen;
