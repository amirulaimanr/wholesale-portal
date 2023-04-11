import React from "react";
import Toast from "../../../MyRouter/wrappers/ToastWrapper";
import Toast2 from "../../../models/toastModel";
import { Link } from "react-router-dom";

const EditProductsMain = (props) => {
    const { productId } = props;

    return (
        <>
            <section className="content-main" style={{ maxWidth: "1200px" }}>
                <form>
                    <div className="content-header">
                        <Link to="/supplier-products" className="btn btn-danger text-white">
                            Go to products
                        </Link>
                        <h2 className="content-title">Update Products</h2>
                        <div>
                            <button type="submit" className="btn btn-primary">
                                Publish now
                            </button>
                        </div>
                    </div>

                    <div className="row mb-4">
                        <div className="col-xl-8 col-lg-8">
                            <div className="card-main mb-4 shadow-sm">
                                <div className="card-body">
                                    <div className="mb-4">
                                        <label htmlFor="product_title" className="form-label">
                                            Product title
                                        </label>
                                        <input type="text" placeholder="Type here" className="form-control" id="product_title" required value={productId.name} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_price" className="form-label">
                                            Price
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_price" required value={productId.price} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="product_price" className="form-label">
                                            Count In Stock
                                        </label>
                                        <input type="number" placeholder="Type here" className="form-control" id="product_price" required value={productId.countInStock} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Description</label>
                                        <textarea placeholder="Type here" className="form-control" rows="7" required value={productId.description} />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label">Images</label>
                                        <input placeholder="Enter image url" type="text" className="form-control" />
                                        <input className="form-control mt-3" type="file" value={productId.image} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
};

export default EditProductsMain;
