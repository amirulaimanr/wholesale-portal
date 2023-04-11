import React from "react";

const OrderDetailsInfo = () => {
    return (
        <div className="row mb-5 order-info-wrap">
            <div className="col-lg-4">
                <article className="icontext align-items-start">
                    <span className="icon icon-sm rounded-circle alert-success">
                        <i className="text-success fas fa-user"></i>
                    </span>
                    <div className="text">
                        <h6 className="mb-1">Customer</h6>
                        <p className="mb-1">
                            User Adamu <br />
                            <a href={`mailto:user@example.com`}>user@example.com</a>
                        </p>
                    </div>
                </article>
            </div>
            <div className="col-lg-4">
                <article className="icontext align-items-start">
                    <span className="icon icon-sm rounded-circle alert-success">
                        <i className="text-success fas fa-truck-moving"></i>
                    </span>
                    <div className="text">
                        <h6 className="mb-1">Order info</h6>
                        <p className="mb-1">
                            Shipping: Tanzania <br /> Pay method: Paypal
                        </p>
                    </div>
                </article>
            </div>
            <div className="col-lg-4">
                <article className="icontext align-items-start">
                    <span className="icon icon-sm rounded-circle alert-success">
                        <i className="text-success fas fa-map-marker-alt"></i>
                    </span>
                    <div className="text">
                        <h6 className="mb-1">Delivered to</h6>
                        <p className="mb-1">
                            Address: Arusha <br /> Ngaramtomi scater <br /> P.O Box Arusha Tz 123
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default OrderDetailsInfo;
