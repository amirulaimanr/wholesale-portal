import React from "react";
import OrderDetailsProducts from "./OrderDetailsProducts";
import OrderDetailInfo from "./OrderDetailsInfo";
import { Link } from "react-router-dom";

const OrderDetailsMain = () => (
    <section className="content-main">
        <div className="content-header">
            <Link to="/supplier-orders" className="btn btn-dark text-white">
                Back to Orders
            </Link>
        </div>

        <div className="card-main">
            <header className="card-header p-3 Header-orange">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <span>
                            <i className="fas fa-calendar-alt mx-2"></i>
                            <b className="text-white">Dec 12 2022</b>
                        </span>
                        <br />
                        <small className="text-white mx-3">Order ID: 1231243434dfdf3</small>
                    </div>
                    <div className="col-lg-6 col-md-6 ms-auto d-flex justify-content-end ">
                        <select className="form-select d-inline-block" style={{ maxWidth: "200px" }}>
                            <option>Change status</option>
                            <option>Awaiting payment</option>
                            <option>Confirmed</option>
                            <option>Shipped</option>
                            <option>Delivered</option>
                        </select>
                        <Link className="btn btn-orange ms-2" to="#">
                            <i className="fas fa-print"></i>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="card-body">
                {/* Order info */}
                <OrderDetailInfo />

                <div className="row">
                    <div className="col-lg-9">
                        <div className="table-responsive">
                            <OrderDetailsProducts />
                        </div>
                    </div>
                    {/* Payment Info */}
                    <div className="col-lg-33 pl-5 pr-2">
                        <div className="box shadow-sm bg-light">
                            <button className="btn btn-dark col-12">MARK AS DELIVERED</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default OrderDetailsMain;
