
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const SupplierDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const inputTemplate1 = (rowData, { rowIndex }) => <InputText value={rowData.companyName}  />
    const inputTemplate2 = (rowData, { rowIndex }) => <InputText value={rowData.contactName}  />
    const inputTemplate3 = (rowData, { rowIndex }) => <InputText value={rowData.email}  />
    const inputTemplate4 = (rowData, { rowIndex }) => <InputText value={rowData.phoneNo}  />
    const inputTemplate5 = (rowData, { rowIndex }) => <InputText value={rowData.address}  />
    const inputTemplate6 = (rowData, { rowIndex }) => <InputText value={rowData.city}  />
    const inputTemplate7 = (rowData, { rowIndex }) => <InputText value={rowData.state}  />
    const inputTemplate8 = (rowData, { rowIndex }) => <InputText value={rowData.postalcode}  />
    const inputTemplate9 = (rowData, { rowIndex }) => <InputText value={rowData.country}  />
    const inputTemplate11 = (rowData, { rowIndex }) => <InputText value={rowData.minimumOrderQty}  />
    const inputTemplate12 = (rowData, { rowIndex }) => <InputText value={rowData.username}  />
    const inputTemplate13 = (rowData, { rowIndex }) => <InputText value={rowData.password}  />
    const inputTemplate14 = (rowData, { rowIndex }) => <InputText value={rowData.confirmPassword}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="companyName" header="Company Name" body={inputTemplate1} style={{ minWidth: "8rem" }} />
            <Column field="contactName" header="Contact Name" body={inputTemplate2} style={{ minWidth: "8rem" }} />
            <Column field="email" header="Email" body={inputTemplate3} style={{ minWidth: "8rem" }} />
            <Column field="phoneNo" header="Phone Number" body={inputTemplate4} style={{ minWidth: "8rem" }} />
            <Column field="address" header="Address" body={inputTemplate5} style={{ minWidth: "8rem" }} />
            <Column field="city" header="City" body={inputTemplate6} style={{ minWidth: "8rem" }} />
            <Column field="state" header="State" body={inputTemplate7} style={{ minWidth: "8rem" }} />
            <Column field="postalcode" header="Zip/Postal Code" body={inputTemplate8} style={{ minWidth: "8rem" }} />
            <Column field="country" header="Country" body={inputTemplate9} style={{ minWidth: "8rem" }} />
            <Column field="minimumOrderQty" header="Minimum Order Quantity" body={inputTemplate11} style={{ minWidth: "8rem" }} />
            <Column field="username" header="Username" body={inputTemplate12} style={{ minWidth: "8rem" }} />
            <Column field="password" header="Password" body={inputTemplate13} style={{ minWidth: "8rem" }} />
            <Column field="confirmPassword" header="Confirm Password" body={inputTemplate14} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default SupplierDataTable;