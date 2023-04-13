import React from "react";
import { Link } from "react-router-dom";
import userimg from "../../../assets/media/favicon.png";

const UserComponent = () => (
    <section className="content-main">
        <div className="content-header">
            <h2 className="content-title">Customers</h2>
            <div>
                <Link to="#" className="btn btn-primary">
                    <i className="material-icons md-plus"></i> Create new
                </Link>
            </div>
        </div>

        <div className="card-main mb-4">
            <header className="card-header">
                <div className="row gx-3">
                    <div className="col-lg-4 me-auto">
                        <input type="text" placeholder="Search..." className="form-control" />
                    </div>
                    <div className="col-lg-2 mt-2 mr-4">
                        <select className="form-select">
                            <option>Show 20</option>
                            <option>Show 30</option>
                            <option>Show 40</option>
                            <option>Show all</option>
                        </select>
                    </div>
                    <div className="col-lg-2 mt-2">
                        <select className="form-select">
                            <option>Status: all</option>
                            <option>Active only</option>
                            <option>Disabled</option>
                        </select>
                    </div>
                </div>
            </header>

            {/* Card */}
            <div className="card-body">
                <div className="grid">
                    <div className="col-user">
                        <div className="card-main card-user shadow-sm">
                            <div className="card-header user-card">
                                <img className="img-md img-avatar" src={userimg} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-5">Admin</h5>
                                <div className="card-text text-muted">
                                    <p className="m-0">Admin</p>
                                    <p>
                                        <a href={`mailto:admin@example.com`}>admin@example.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* user */}
                    <div className="col-user">
                        <div className="card-main card-user shadow-sm">
                            <div className="card-header user-card">
                                <img className="img-md img-avatar" src={userimg} alt="" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title mt-5">User</h5>
                                <div className="card-text text-muted">
                                    <p className="m-0">Customer</p>
                                    <p>
                                        <a href={`mailto:admin@example.com`}>buyer@example.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* nav */}
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
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
);

export default UserComponent;
