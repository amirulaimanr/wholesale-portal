import React from "react";
import StaticImg from "../../../assets/media/static.png";

const SalesStatistics = () => {
    return (
        <div className="col-xl-6 pl-4 mr-4 col-lg-12">
            <div className="card-main mb-4 shadow-sm">
                <article className="card-body">
                    <h5 className="card-title">Sale statistic</h5>
                    <img src={StaticImg} />
                </article>
            </div>
        </div>
    );
};

export default SalesStatistics;
