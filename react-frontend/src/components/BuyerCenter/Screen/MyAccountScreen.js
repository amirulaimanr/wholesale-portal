import React from "react";
import BuyerSidebar from "../BuyerSidebar";
import MyAccountrMain from "../MyAccount/MyAccountMain";

import "../../SupplierDashboard/Style/SupplierMain.css";
import "../../SupplierDashboard/Style/SupplierSidebar.css";

const MyAccountScreen = (props) => {
    return (
        <>
            <BuyerSidebar />
            <main className="main-wrap">
                <MyAccountrMain />
            </main>
        </>
    );
};

export default MyAccountScreen;
