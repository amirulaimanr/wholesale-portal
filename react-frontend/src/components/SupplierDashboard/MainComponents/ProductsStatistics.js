import React from "react";
import ProductImg from "../../../assets/media/product.png";

const ProductsStatistics = () => {
    return (
        <div className="col-xl-6  col-lg-12">
            <div className="card-main mb-4 shadow-sm">
                <article className="card-body">
                    <h5 className="card-title">Products statistic</h5>
                    <div className="statistic-img">
                        <img src={ProductImg} />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ProductsStatistics;
