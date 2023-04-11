import React from "react";
import SupplierSidebar from "../SupplierSidebar";
import SupplierHeader from "../SupplierHeader";
import UserComponent from "../UserComponent/UserComponent";

const UsersScreen = () => (
    <>
        <SupplierSidebar />
        <main className="main-wrap">
            <SupplierHeader />
            <UserComponent />
        </main>
    </>
);

export default UsersScreen;
