import React from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import Skeleton from "react-loading-skeleton";
import { useState, useEffect } from "react";

const Products = ({ product }) => {
    // skeleton loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });

    return (
        <div>
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                {loading ? (
                    <div style={{ marginRight: "20px" }}>
                        <Skeleton height={400} width={240} />
                    </div>
                ) : (
                    <div className="col-np-xl bg-white p-3 cursor-pointer mr-4 border-round productList-card" key={product.id}>
                        <div className="col-np-content">
                            <Link to={`/products/${product.category}/${product._id}`} className="text-900">
                                <div className="col-np-image">
                                    <img data-v-6fef611d="" width="100%" alt={product.name} className="img" data-src={product.image} src={product.image} lazy="loaded" />
                                </div>
                                <div className="product-details-flexbox">
                                    <div className="product-name">{product.name}</div>
                                    <div className="product-price">
                                        <b>$ {product.price}</b> / {product.unit.toLowerCase()}
                                    </div>
                                    <div className="product-qty">{product.qty} (MOQ)</div>
                                </div>
                            </Link>

                            <div className="flex align-items-center justify-content-between mt-2">
                                <Link to={`/send-inquiry/${product._id}`} className="text-900">
                                    <div className="product-button">Inquire Now</div>
                                </Link>

                                <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === "OUTOFSTOCK"}></Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Products;
