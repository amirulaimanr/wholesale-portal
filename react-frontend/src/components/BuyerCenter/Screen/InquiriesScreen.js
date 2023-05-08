import React from "react";
import BuyerSidebar from "../BuyerSidebar";
import InquiriesMain from "../InquiriesComponent/InquiriesMain";

import "../../SupplierDashboard/Style/SupplierMain.css";
import "../../SupplierDashboard/Style/SupplierSidebar.css";

const InquiriesScreen = (props) => {
    return (
        <>
            <BuyerSidebar />
            <main className="main-wrap">
                <InquiriesMain />
            </main>
        </>
    );
};

export default InquiriesScreen;
