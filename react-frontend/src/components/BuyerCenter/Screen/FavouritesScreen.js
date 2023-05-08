import React from "react";
import BuyerSidebar from "../BuyerSidebar";
import FavouritesMain from "../FavouritesComponent/FavouritesMain";

import "../../SupplierDashboard/Style/SupplierMain.css";
import "../../SupplierDashboard/Style/SupplierSidebar.css";

const FavouritesScreen = (props) => {
    return (
        <>
            <BuyerSidebar />
            <main className="main-wrap">
                <FavouritesMain />
            </main>
        </>
    );
};

export default FavouritesScreen;
