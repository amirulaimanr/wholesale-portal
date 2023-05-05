import React from "react";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

const RequestForQuotation = () => {
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [aboutProduct, setAboutProduct] = useState("");
    const [sourcingType, setSourcingType] = useState("");
    const [orderQuantity, setOrderQuantity] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [validTo, setValidTo] = useState("");
    const [email, setEmail] = useState("");
    const [sendToMoreSuppliers, setSendToMoreSuppliers] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
            <div className="p-grid p-fluid">
                <div className="p-col-12">
                    <div className="card inquiry-content-container">
                        <div>
                            <h3 className="font-bold ">Request For Quotations - RFQ</h3>
                            <form onSubmit={handleSubmit}>
                                <label className="flex flex-column">
                                    <span className="font-semibold mt-4">Product Name*</span>
                                    <InputText type="text" className="mt-2" placeholder="Enter a specific product name, e.g. 'MP3 Players instead of 'Electronics'." value={productName} onChange={(e) => setProductName(e.target.value)} />
                                </label>
                                <br />
                                <label className="flex flex-column">
                                    <span className="font-semibold mt-4">Product Category</span>
                                    <Dropdown select value={productCategory} placeholder="Select the closest matching product category" className="mt-2" onChange={(e) => setProductCategory(e.target.value)}>
                                        <option value="">Select a category</option>
                                        <option value="category1">Category 1</option>
                                        <option value="category2">Category 2</option>
                                        <option value="category3">Category 3</option>
                                    </Dropdown>
                                </label>
                                <br />
                                <label className="flex flex-column">
                                    <span className="font-semibold mt-4">About Your Product</span>

                                    <InputTextarea
                                        placeholder="Please indicate your detailed requirements to ensure fast and efficient responses from suppliers. You may include: Material, Size/Dimension, Grade/Quality Standard, Packaging requirements and/or others."
                                        className="mt-2"
                                        value={aboutProduct}
                                        onChange={(e) => setAboutProduct(e.target.value)}
                                    />
                                </label>
                                <br />
                                <label className="flex flex-column">
                                    <span className="font-semibold mt-4">Sourcing Type</span>
                                    <Dropdown select value={sourcingType} placeholder="Select one" className="mt-2" onChange={(e) => setSourcingType(e.target.value)}>
                                        <option value="">Select a sourcing type</option>
                                        <option value="type1">Type 1</option>
                                        <option value="type2">Type 2</option>
                                        <option value="type3">Type 3</option>
                                    </Dropdown>
                                </label>
                                <br />
                                <div className="flex flex-column">
                                    <label className="flex flex-row w-full">
                                        <span className="font-semibold mt-4 w-6">Estimated Order Quantity*</span>
                                        <span className="font-semibold mt-4 w-6">Preferred Unit Price</span>
                                    </label>
                                    <label className="flex flex-row mt-2">
                                        <InputText type="text" className="w-8 mr-3" placeholder="e.g. 1000" value={orderQuantity} onChange={(e) => setOrderQuantity(e.target.value)} />
                                        <InputText type="text" value={unitPrice} placeholder="e.g. USD 50" onChange={(e) => setUnitPrice(e.target.value)} />
                                    </label>
                                </div>
                                <label className="flex flex-column">
                                    <span className="font-semibold mt-4">Valid To*</span>
                                    <Calendar value={validTo} placeholder="Select range of date" className="mt-2" onChange={(e) => setValidTo(e.value)} selectionMode="range" readOnlyInput />
                                </label>
                                <br />
                                <label className="flex flex-column">
                                    <span className="font-semibold mt-4">Email Address*</span>
                                    <InputText type="email" className="mt-2" placeholder="Please enter" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </label>
                                <br />
                                <div className="p-field mt-4">
                                    <Checkbox id="isSendToAll" checked={sendToMoreSuppliers} onChange={(e) => setSendToMoreSuppliers(e.checked)} />
                                    <label htmlFor="isSendToAll">
                                        <span className="ml-3 my-auto">I'd like to send this RFQ to more suppliers, if I have not received 20 quotations within the next 48 hours.</span>
                                    </label>
                                </div>
                                <br />
                                <Button className="w-3 mt-4" type="submit">
                                    <span className="font-bold">Submit</span>
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RequestForQuotation;
