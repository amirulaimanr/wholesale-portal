import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Image } from "primereact/image";

const SendInquiry = () => {
    const [quantity, setQuantity] = useState("");
    const [specifiedAttribute, setSpecifiedAttribute] = useState("");
    const [messageToSupplier, setMessageToSupplier] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [isSendToAll, setIsSendToAll] = useState(false);
    const [supplier, setSupplier] = useState(null);
    console.log(supplier);

    const [product, setProduct] = useState(null);
    console.log(product);
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const productData = await dispatch.productsModel.fetchProductsById(id);
                setProduct(productData);
                console.log(productData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProductDetails();
    }, [dispatch, id]);

    useEffect(() => {
        const fetchSupplierDetails = async () => {
            try {
                const supplierData = await dispatch.productsModel.fetchProductAndSupplierData(id);
                setSupplier(supplierData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSupplierDetails();
    }, [dispatch, id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleSendInquiry = (e) => {
        e.preventDefault();
        // Handle sending inquiry logic here
    };

    return (
        <div className="p-grid p-fluid">
            <div className="p-col-12">
                <div className="card inquiry-content-container">
                    <div className="inquiry-content-box">
                        <h3 className="font-semibold">Send Inquiry</h3>
                        <form onSubmit={handleSendInquiry}>
                            <div className="p-field">
                                <label htmlFor="supplierCompanyName">
                                    <h5 className="font-semibold mt-4">{supplier ? supplier.supplier.name : " "}</h5>
                                </label>
                            </div>
                            <div className="p-field mt-4">
                                <label htmlFor="productInformation" className="mb-3">
                                    Product Information
                                </label>
                                <div className="inquiry-product-info">
                                    <div className="inquiry-product-info-content p-4 flex">
                                        <div className="product-inquiry-img">
                                            <img className="" src={product.image} alt={product.image} />
                                        </div>
                                        <div className="inquiry-product-spec flex flex-column">
                                            <span className="mt-1 ml-4 font-semibold">{product.name}</span>
                                            <span className="mt-1 ml-4 font-semibold">{product.description}</span>
                                            <span className="mt-1 ml-4 font-semibold">{product.brand}</span>
                                            <span className="mt-1 ml-4 font-semibold">{product.model}</span>
                                            <span className="mt-1 ml-4 font-semibold">{product.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-field mt-4 flex flex-column">
                                <label htmlFor="quantity" className="mb-3">
                                    Quantity
                                </label>
                                <div className="flex flex-row">
                                    <InputText id="quantity" placeholder={product.minOrderQuantity} className="w-6" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                                    <span className="my-auto ml-2">{product.unit}(s)</span>
                                </div>
                            </div>
                            <div className="p-field mt-4">
                                <label htmlFor="specifiedAttribute" className="mb-3">
                                    Further Specified Attribute (s)
                                </label>
                                <InputText id="specifiedAttribute" placeholder="Specific request if required" value={specifiedAttribute} onChange={(e) => setSpecifiedAttribute(e.target.value)} />
                            </div>
                            <div className="p-field mt-4">
                                <label htmlFor="messageToSupplier" className="mb-3">
                                    Message to Supplier
                                </label>
                                <InputTextarea className="h-10rem" placeholder="Enter product details such as color, size, materials and other specific requirments." id="messageToSupplier" value={messageToSupplier} onChange={(e) => setMessageToSupplier(e.target.value)} />
                            </div>
                            <div className="p-field mt-4">
                                <label htmlFor="emailAddress" className="mb-3">
                                    Email Address
                                </label>
                                <InputText id="emailAddress" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                            </div>
                            <div className="p-field mt-4">
                                <Checkbox id="isSendToAll" checked={isSendToAll} onChange={(e) => setIsSendToAll(e.checked)} />
                                <label htmlFor="isSendToAll">
                                    <span className="ml-3 my-auto">Also Send Inquiries to: All 38 Verified Suppliers of Automotive Tools</span>
                                </label>
                            </div>
                            <div className="p-field mt-4">
                                <Button className="w-4" label="Send Inquiry Now" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SendInquiry;
