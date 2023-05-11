import React from "react";
import BuyerSidebar from "../BuyerSidebar";
import SettingsMain from "../SettingsComponent/SettingsMain";

import "../../SupplierDashboard/Style/SupplierMain.css";
import "../../SupplierDashboard/Style/SupplierSidebar.css";

const SettingsScreen = (props) => {
    return (
        <>
            <BuyerSidebar />
            <main className="main-wrap">
                <SettingsMain />
            </main>
        </>
    );
};

export default SettingsScreen;
