import React from "react";
import "../Style/SupplierMain.css";

const TopTotal = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <div className="card-main card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-primary">
                            <i className="text-primary fas fa-dollar-sign"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Sales</h6> <span>$22,678</span>
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-main card-body mb-4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-success">
                            <i className="text-success fas fa-shopping-bag"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Orders</h6>
                            <span>130</span>
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card-main card-body mb4 shadow-sm">
                    <article className="icontext">
                        <span className="icon icon-sm rounded-circle alert-warning">
                            <i className="text-warning fas fa-shopping-basket"></i>
                        </span>
                        <div className="text">
                            <h6 className="mb-1">Total Products</h6>
                            <span>70</span>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default TopTotal;
