import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";

import "../Style/SupplierMain.css";

const MainProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.supplierModel.supplierProduct);
    console.log(products);
    const loading = useSelector((state) => state.supplierModel.loading);

    useEffect(() => {
        dispatch.supplierModel.fetchSupplierProductBySupplierId();
    }, [dispatch]);

    return (
        <section className="content-main">
            <div className="content-header">
                <h2 className="content-title">Products</h2>
                <div>
                    <Link to="/supplier-dashboard/add-products" className="btn btn-primary">
                        Create new
                    </Link>
                </div>
            </div>

            <div className="card-main mb-4 shadow-sm">
                <header className="card-header bg-white">
                    <div className="row gx-3 py-3 row-products">
                        <div className="col-lg-4 me-auto">
                            <input type="search" placeholder="Search...." className="form-control p-2" />
                        </div>
                        <div className="col-lg-2 pr-4">
                            <select className="form-select">
                                <option>All Category</option>
                                <option>Electronics</option>
                                <option>Clothings</option>
                                <option>Something else</option>
                            </select>
                        </div>
                        <div className="col-lg-2 pr-4">
                            <select className="form-select">
                                <option>Latest added</option>
                                <option>Cheap first</option>
                                <option>Most viewed</option>
                            </select>
                        </div>
                    </div>
                </header>

                <div className="card-body">
                    {loading ? (
                        <div className="text-center">
                            <h3>Loading...</h3>
                        </div>
                    ) : (
                        <div className="row">
                            {/* Products */}
                            {products && products.length > 0 ? (
                                products.map((product) => {
                                    console.log(products.length);
                                    console.log(product);
                                    return <Product key={product._id} product={product} />;
                                })
                            ) : (
                                <div className="text-center">
                                    <p>No products found!</p>
                                    <p className="ml-3">Please add a product.</p>
                                </div>
                            )}
                        </div>
                    )}

                    <nav className="float-end mt-4" aria-label="Page navigation">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <Link className="page-link" to="#">
                                    Previous
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link className="page-link" to="#">
                                    1
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    2
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    3
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link className="page-link" to="#">
                                    Next
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default MainProducts;
