import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    const { product } = props;

    return (
        <>
            <div className="col-sm-6 col-lg-3 mb-5"></div>
            <div className="card-main card-product-grid shadow-sm mb-5">
                <Link to="#" className="img-wrap">
                    <img src={product.image} alt="Product Image" />
                </Link>
                <div className="info-wrap">
                    <Link to="#" className="title text-truncate">
                        {product.name}
                    </Link>
                    <div className="price mb-2">${product.price}</div>
                </div>

                <div className="row">
                    <Link to={`/product/${product._id}/edit`} className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6">
                        <i className="fas fa-edit"></i>
                    </Link>
                    <Link to="#" className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6">
                        <i className="fas fa-trash-alt"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Product;
