import React from "react";
import SupplierSidebar from "./SupplierSidebar";
import SupplierHeader from "./SupplierHeader";
import SupplierMain from "./SupplierMain";

import "./Style/SupplierHeader.css";
import "./Style/SupplierMain.css";
import "./Style/SupplierSidebar.css";

const SupplierDashboard = (props) => {
    return (
        <>
            {/* <ProtectedRoute path="/buyer-center" allowedRoles={["Supplier"]}> */}
            <SupplierSidebar />
            <main className="main-wrap">
                <SupplierHeader />
                <SupplierMain />
            </main>
            {/* </ProtectedRoute> */}
        </>
    );
};

export default SupplierDashboard;
