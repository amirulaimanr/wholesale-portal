import React, { useState } from "react";
import "../Style/BuyerMain.css";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const BcOrderMain = () => {
    const inquiries = [
        { id: 1, inquiryDetails: "Details 1", supplier: "Supplier 1", message: "Message 1", updateTime: "2023-05-08 12:34" },
        { id: 2, inquiryDetails: "Details 2", supplier: "Supplier 2", message: "Message 2", updateTime: "2023-05-07 10:15" },
        { id: 3, inquiryDetails: "Details 3", supplier: "Supplier 3", message: "Message 3", updateTime: "2023-05-06 14:22" },
    ];

    return (
        <>
            <section className="content-main inquiries-container">
                <div className="bc-title-container w-full">
                    <h4 className="font-semibold">My Orders</h4>
                </div>

                <DataTable className="mt-5" value={inquiries}>
                    <Column field="inquiryDetails" header="Order Info" />
                    <Column field="supplier" header="Order Amount" />
                    <Column field="message" header="Order Status" />
                    <Column field="updateTime" header="Actions" />
                </DataTable>
            </section>
        </>
    );
};

export default BcOrderMain;
