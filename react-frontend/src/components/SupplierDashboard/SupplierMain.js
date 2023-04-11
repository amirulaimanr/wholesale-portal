import React from "react";
import TopTotal from "./MainComponents/TopTotal";
import LatestOrder from "./MainComponents/LatestOrder";
import SaleStatistics from "./MainComponents/SalesStatistics";
import ProductsStatistics from "./MainComponents/ProductsStatistics";

const SupplierMain = () => {
    return (
        <>
            <section className="content-main">
                <div className="content-header">
                    <h2 className="content-title"> Dashboard </h2>
                </div>
                {/* Top Total */}
                <TopTotal />

                <div className="row">
                    {/* STATICS */}
                    <SaleStatistics />
                    <ProductsStatistics />
                </div>

                {/* Laters Order */}
                <div className="card-main mb-4 shadow-sm">
                    <LatestOrder />
                </div>
            </section>
        </>
    );
};

export default SupplierMain;
