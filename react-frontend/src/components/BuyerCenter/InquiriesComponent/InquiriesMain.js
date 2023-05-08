import React, { useState } from "react";
import "../Style/BuyerMain.css";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const InquiriesMain = () => {
    const [selectedInquiries, setSelectedInquiries] = useState([]);
    const [toast, setToast] = useState(null);

    const handleMarkAsRead = () => {
        if (selectedInquiries.length > 0) {
            // TODO: mark selected inquiries as read
            setSelectedInquiries([]);
        } else {
            setToast({
                severity: "warn",
                summary: "Please select at least one inquiry!",
                life: 3000,
            });
        }
    };

    const handleMarkAsUnread = () => {
        if (selectedInquiries.length > 0) {
            // TODO: mark selected inquiries as unread
            setSelectedInquiries([]);
        } else {
            setToast({
                severity: "warn",
                summary: "Please select at least one inquiry!",
                life: 3000,
            });
        }
    };

    const handleSelectInquiry = (inquiry) => {
        if (selectedInquiries.includes(inquiry)) {
            setSelectedInquiries(selectedInquiries.filter((i) => i !== inquiry));
        } else {
            setSelectedInquiries([...selectedInquiries, inquiry]);
        }
    };

    const inquiries = [
        { id: 1, inquiryDetails: "Details 1", supplier: "Supplier 1", message: "Message 1", updateTime: "2023-05-08 12:34" },
        { id: 2, inquiryDetails: "Details 2", supplier: "Supplier 2", message: "Message 2", updateTime: "2023-05-07 10:15" },
        { id: 3, inquiryDetails: "Details 3", supplier: "Supplier 3", message: "Message 3", updateTime: "2023-05-06 14:22" },
    ];

    return (
        <>
            <section className="content-main inquiries-container">
                <div className="bc-title-container w-full">
                    <h4 className="font-semibold">My Inquiries</h4>
                </div>
                <Toast ref={(el) => setToast(el)} />
                <TabView>
                    <TabPanel header="All">
                        <div className="p-mb-3">
                            <Button label="Mark as Read" icon="pi pi-check" className="p-button-sm p-button-success p-mr-2 mr-5" onClick={handleMarkAsRead} disabled={selectedInquiries.length === 0} />
                            <Button label="Mark as Unread" icon="pi pi-times" className="p-button-sm p-button-danger" onClick={handleMarkAsUnread} disabled={selectedInquiries.length === 0} />
                        </div>
                        {/* TODO: display all inquiries */}

                        <DataTable className="mt-5" value={inquiries} selection={selectedInquiries} onSelectionChange={(e) => setSelectedInquiries(e.value)}>
                            <Column selectionMode="multiple" style={{ width: "3rem" }} />
                            <Column field="inquiryDetails" header="Inquiries Details" />
                            <Column field="supplier" header="Supplier Name" />
                            <Column field="message" header="Messages" />
                            <Column field="updateTime" header="Update Time" />
                            <Column header="Action" />
                        </DataTable>
                    </TabPanel>
                    <TabPanel header="Unread">
                        <div className="p-mb-3">
                            <Button label="Mark as Read" icon="pi pi-check" className="p-button-sm p-button-success p-mr-2 mr-5" onClick={handleMarkAsRead} disabled={selectedInquiries.length === 0} />
                            <Button label="Mark as Unread" icon="pi pi-times" className="p-button-sm p-button-danger" onClick={handleMarkAsUnread} disabled={selectedInquiries.length === 0} />
                        </div>
                        {/* TODO: display unread inquiries */}

                        <DataTable className="mt-5" value={inquiries} selection={selectedInquiries} onSelectionChange={(e) => setSelectedInquiries(e.value)}>
                            <Column selectionMode="multiple" style={{ width: "3rem" }} />
                            <Column field="inquiryDetails" header="Inquiries Details" />
                            <Column field="supplier" header="Supplier Name" />
                            <Column field="message" header="Messages" />
                            <Column field="updateTime" header="Update Time" />
                            <Column header="Action" />
                        </DataTable>
                    </TabPanel>
                </TabView>
            </section>
        </>
    );
};

export default InquiriesMain;
