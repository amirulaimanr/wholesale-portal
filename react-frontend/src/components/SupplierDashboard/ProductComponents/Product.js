import React from "react";
import { Link } from "react-router-dom";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";

const Product = ({ product, loading }) => {
    console.log("supp", product);
    return (
        <>
            <div>
                <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                    {loading ? (
                        <div className="col-np-xl bg-white p-3 cursor-pointer mr-4 border-round productList-card" style={{ position: "relative" }}>
                            <ProgressSpinner style={{ width: "50px", height: "50px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} strokeWidth="8" fill="#EEEEEE" animationDuration=".5s" />
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
                                    <Link to={`/supplier-dashboard/product/${product._id}/edit`} className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6">
                                        <i className="fas fa-edit"></i>
                                    </Link>
                                    <Link to="#" className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6">
                                        <i className="fas fa-trash-alt"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Product;
