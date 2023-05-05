import React, { useState, useEffect, useRef } from "react";
import "./style/products.css";
import { Image } from "primereact/image";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "primereact/button";
import { useHistory } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import InquiryForm from "./InquiryForm";
import { Skeleton } from "primereact/skeleton";

const ProductsDetails = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [activeIndex, setActiveIndex] = useState(0);

    const { category, id } = useParams();
    const productList = useSelector((state) => state.productsModel.productList);
    const product = productList.find((p) => p._id === id);
    console.log(product);

    const [supplier, setSupplier] = useState(null);

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

    useEffect(() => {
        dispatch.productsModel.fetchProducts(category, id);
    }, [dispatch, category, id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // tabMenu

    const items = [
        { label: "Product Details", icon: "fas fa-paste" },
        { label: "Company Profile", icon: "fas fa-building" },
        { label: "Contact Supplier", icon: "fas fa-address-card" },
    ];

    const onTabChange = (e) => {
        setActiveIndex(e.index);
        console.log(e.index);
    };

    return (
        <div className="product-details-body ">
            <div className="product-info-container pt-4">
                <div className="product-info-content">
                    <div className="product-info-img">
                        <Image className="" src={product.image} alt={product.image} preview />
                    </div>
                    <div className="info-desc p-3">
                        <div className="product-info-name font-bold text-3xl mb-5">{product.name}</div>
                        <div className="pricing-info p-3">
                            <div className="product-info-price mb-2">
                                <b className="text-2xl">$ {product.price}</b> / {product.unit.toLowerCase()}
                            </div>
                            <div className="product-info-minOrder">
                                <b className="text-xl">{product.minOrderQuantity}</b> <span>Minimum order</span>
                            </div>
                        </div>
                        <div>
                            <Button label="Inquire Now" icon="fa fa-envelope text-2xl text-center ml-4" className="text-center w-6 h-4rem mt-8 text-xl" onClick={() => history.push(`/send-inquiry/${product._id}`)} />
                        </div>
                        <div className="payment-info mt-3 flex font-medium ">
                            <span className="mt-1">Payment:</span>

                            <div className="payment-item ml-2">
                                <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon_paypal.svg" alt="" className="paypal" data-v-fc5fcaa0="" />
                            </div>
                            <div className="payment-item ml-2">
                                <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon-mastercard.svg" alt="" className="master" data-v-fc5fcaa0="" />
                            </div>
                            <div className="payment-item ml-2">
                                <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon_visa.svg" alt="" className="visa" data-v-fc5fcaa0="" />
                            </div>
                            <div className="payment-item ml-2">
                                <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon_AmericanExpress.svg" alt="" className="american" data-v-fc5fcaa0=""></img>
                            </div>
                            <div className="payment-item ml-2">
                                <img src="https://s.globalsources.com/IMAGES/website/assets/images/share/icon_discover.svg" alt="" className="discover" data-v-fc5fcaa0=""></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-supplier-info w-full">
                    {supplier ? (
                        <div className="product-supplier-card flex flex-column pl-3 p-5">
                            <div className="product-supplier-name underline font-bold mb-2">{supplier.supplier.name}</div>
                            <div className="product-supplier-verification text-green-700">
                                <h6 className="font-bold">
                                    {supplier.supplier.verified ? "Verified " : ""}
                                    {supplier.supplier.verified && <i className="fas fa-check-circle" />}
                                </h6>
                            </div>
                            <div className="font-bold text-orange-600 mb-2">{supplier.supplier.country}</div>
                            <div className="product-supplier-about font-semibold">{supplier.supplier.about}</div>
                            <div className="product-supplier-response-time mt-4">
                                <span className="font-semibold">Avg Response Time:</span> {supplier.supplier.responseTime}
                            </div>
                            <div className="product-supplier-type mt-4">
                                <span className="font-semibold">Business Type:</span> {supplier.supplier.businessType}
                            </div>
                        </div>
                    ) : (
                        <div className="product-supplier-card flex flex-column pl-3 p-5">
                            <div className="product-supplier-name underline font-bold mb-2">&nbsp;</div>
                            <div className="product-supplier-verification text-green-700">
                                <h6 className="font-bold">&nbsp;</h6>
                            </div>
                            <div className="font-bold text-orange-600 mb-2">&nbsp;</div>
                            <div className="product-supplier-about font-semibold">&nbsp;</div>
                            <div className="product-supplier-response-time mt-4">
                                <span className="font-semibold">Avg Response Time:</span> &nbsp;
                            </div>
                            <div className="product-supplier-type mt-4">
                                <span className="font-semibold">Business Type:</span> &nbsp;
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="product-details-content w-full mt-4">
                <div className="card w-full" style={{ borderRadius: "2px" }}>
                    <TabMenu model={items} activeIndex={activeIndex} onTabChange={onTabChange} />
                    {activeIndex === 0 && (
                        <>
                            <div className="product-details-header">
                                <ul>
                                    <li onClick={() => handleScrollToSection("product-info")}>Product Information</li>
                                    <li onClick={() => handleScrollToSection("shipping-info")}>Shipping Information</li>
                                    <li onClick={() => handleScrollToSection("exports-info")}>Main Exports Market</li>
                                    <li onClick={() => handleScrollToSection("payment-info")}>Payment Details</li>
                                </ul>
                            </div>
                            <div className="product-information-container mt-6 pl-3">
                                <h5 className="font-bold" id="product-info">
                                    Product Information
                                </h5>
                                <div className="product-table-container mt-3">
                                    <div className="product-table">
                                        <table>
                                            <tbody>
                                                <tr className="">
                                                    <th className="table-info">Model Number</th>
                                                    <td colSpan="5" className="table-item">
                                                        {product.model}
                                                    </td>
                                                </tr>
                                                <tr className="">
                                                    <th className="table-info">Brand Name</th>
                                                    <td colSpan="5" className="table-item">
                                                        {product.brand}
                                                    </td>
                                                </tr>
                                                <tr className="">
                                                    <th className="table-info">Origin</th>
                                                    <td colSpan="5" className="table-item">
                                                        {product.origin}
                                                    </td>
                                                </tr>
                                                <tr className="">
                                                    <th className="table-info">Small Orders</th>
                                                    <td colSpan="5" className="table-item">
                                                        {product.smallOrder ? "Accepted" : "Rejected"}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="spec-details-container">
                                    <div className="spec-details-content">
                                        <h5 className="font-bold mt-4">Key Specifications/ Special Features:</h5>
                                        <h6 className="mt-5">
                                            Product name: <span className="font-medium ml-2">{product.name}</span>
                                        </h6>
                                        <h6 className="mt-2">
                                            Description: <span className="font-medium ml-2">{product.description}</span>
                                        </h6>
                                        <h6 className="mt-2">
                                            Ready to Order: <span className="font-medium ml-2">{product.rto ? "Yes" : "No"}</span>
                                        </h6>
                                    </div>
                                </div>
                                <div className="shipping-info-container">
                                    <div className="shipping-info-content">
                                        <h5 className="font-bold mt-4" id="shipping-info">
                                            Shipping Information
                                        </h5>
                                        <div className="product-table-container mt-3">
                                            <div className="product-table">
                                                <table>
                                                    <tbody>
                                                        <tr className="">
                                                            <th className="table-info">FOB Port</th>
                                                            <td colSpan="5" className="table-item"></td>
                                                        </tr>
                                                        <tr className="">
                                                            <th className="table-info">Weight per Unit</th>
                                                            <td colSpan="5" className="table-item"></td>
                                                        </tr>
                                                        <tr className="">
                                                            <th className="table-info">Export Carton Dimensions L/W/H</th>
                                                            <td colSpan="5" className="table-item"></td>
                                                        </tr>
                                                        <tr className="">
                                                            <th className="table-info" id="payment-info">
                                                                Logistics attributes
                                                            </th>
                                                            <td colSpan="5" className="table-item"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="product-table-container mt-3 ml-4" id="exports-info">
                                            <div className="product-table">
                                                <table>
                                                    <tbody>
                                                        <tr className="">
                                                            <th className="table-info">Lead Time</th>
                                                            <td colSpan="5" className="table-item"></td>
                                                        </tr>
                                                        <tr className="">
                                                            <th className="table-info">Dimensions per Unit</th>
                                                            <td colSpan="5" className="table-item"></td>
                                                        </tr>
                                                        <tr className="">
                                                            <th className="table-info">Units per Export Carton</th>
                                                            <td colSpan="5" className="table-item"></td>
                                                        </tr>
                                                        <tr className="">
                                                            <th className="table-info">Export Carton Weight</th>
                                                            <td colSpan="5" className="table-item"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="export-details-container">
                                    <div className="export-details-content">
                                        <h5 className="font-bold mt-4">Main Export Markets</h5>
                                        <h6 className="inline-block font-bold mt-3">- Asia</h6>
                                    </div>
                                </div>
                                <div className="payment-details-container">
                                    <div className="payment-details-content">
                                        <h5 className="font-bold mt-4">Payment Details</h5>
                                        <div className="product-table-container mt-3 ">
                                            <div className="product-table">
                                                <table>
                                                    <tbody>
                                                        <tr className="">
                                                            <th className="table-info">Payment Method</th>
                                                            <td colSpan="5" className="table-item">
                                                                {supplier ? supplier.supplier.paymentTerms : " "}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {activeIndex === 1 && (
                        <>
                            {supplier ? (
                                <div className="company-details-container">
                                    <div className="company-details-container">
                                        <div className="company-details-content ml-4">
                                            <h5 className="font-bold mt-4">Company Overview</h5>
                                            <h5 className="font-semibold mt-4">Basic Information</h5>
                                            <div className="company-basic-info flex flex-row">
                                                <div className="product-table-container mt-3">
                                                    <div className="product-table">
                                                        <table>
                                                            <tbody>
                                                                <tr className="">
                                                                    <th className="table-info">Year Established</th>
                                                                    <td colSpan="5" className="table-item">
                                                                        {supplier.supplier.yearEstablished}
                                                                    </td>
                                                                </tr>
                                                                <tr className="">
                                                                    <th className="table-info">Business Type</th>
                                                                    <td colSpan="5" className="table-item">
                                                                        {supplier.supplier.businessType}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="product-table-container mt-3 ml-4">
                                                    <div className="product-table">
                                                        <table>
                                                            <tbody>
                                                                <tr className="">
                                                                    <th className="table-info">Country / Region:</th>
                                                                    <td colSpan="5" className="table-item">
                                                                        {supplier.supplier.country}
                                                                    </td>
                                                                </tr>
                                                                <tr className="">
                                                                    <th className="table-info">Total Employees</th>
                                                                    <td colSpan="5" className="table-item">
                                                                        {supplier.supplier.employees}
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="company-details-container">
                                    <div className="company-details-container">
                                        <div className="company-details-content ml-4">
                                            <h5 className="font-bold mt-4">Company Overview</h5>
                                            <h5 className="font-semibold mt-4">Basic Information</h5>
                                            <div className="company-basic-info flex flex-row">
                                                <div className="product-table-container mt-3">
                                                    <div className="product-table">
                                                        <table>
                                                            <tbody>
                                                                <tr className="">
                                                                    <th className="table-info">Year Established</th>
                                                                    <td colSpan="5" className="table-item"></td>
                                                                </tr>
                                                                <tr className="">
                                                                    <th className="table-info">Business Type</th>
                                                                    <td colSpan="5" className="table-item"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="product-table-container mt-3 ml-4">
                                                    <div className="product-table">
                                                        <table>
                                                            <tbody>
                                                                <tr className="">
                                                                    <th className="table-info">Country / Region:</th>
                                                                    <td colSpan="5" className="table-item"></td>
                                                                </tr>
                                                                <tr className="">
                                                                    <th className="table-info">Total Employees</th>
                                                                    <td colSpan="5" className="table-item"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                    {activeIndex === 2 && (
                        <div className="contact-info-container">
                            <div className="contact-info-content ml-4">
                                <h5 className="font-bold mt-4">Contact Supplier</h5>
                                <h6 className="font-semibold mt-5">{supplier ? supplier.supplier.name : " "}</h6>
                                <div className="product-table-container mt-2 ">
                                    <div className="product-table">
                                        <table>
                                            <tbody>
                                                <tr className="">
                                                    <th className="table-info">Address</th>
                                                    <td colSpan="5" className="table-item">
                                                        {supplier ? supplier.supplier.address : " "}
                                                    </td>
                                                </tr>
                                                <tr className="">
                                                    <th className="table-info">Website Address</th>
                                                    <td colSpan="5" className="table-item">
                                                        <a href={supplier.supplier.website}>{supplier ? supplier.supplier.website : " "}</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <InquiryForm />
            {/* <div className="card send-inquiry-container w-full mt-2">
                <div className="send-inquiry-header">
                    <h5 className="font-bold mt-3">Send a direct inquiry to this supplier</h5>
                </div>
            </div> */}
        </div>
    );
};

export default ProductsDetails;
