import React from "react";
import BuyerSidebar from "../BuyerSidebar";
import RfqMain from "../RFQComponent/RfqMain";

import "../../SupplierDashboard/Style/SupplierMain.css";
import "../../SupplierDashboard/Style/SupplierSidebar.css";

const RfqScreen = (props) => {
    return (
        <>
            <BuyerSidebar />
            <main className="main-wrap">
                <RfqMain />
            </main>
        </>
    );
};

export default RfqScreen;
