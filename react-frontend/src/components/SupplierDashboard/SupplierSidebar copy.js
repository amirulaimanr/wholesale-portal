import React from "react";
import { Link, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "./Style/Sidebar.css";

const SupplierSidebar = () => {
    return (
        <div>
            <aside className="navbar-aside" id="offcanvas-aside">
                <div className="aside-top">
                    <Link to="/" className="brand-wrap">
                        <img></img>
                    </Link>
                    <div>
                        <button className="btn btn-icon btn-aside-minimize">
                            <i className="text-muted fas fa-stream"></i>
                        </button>
                    </div>
                </div>

                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/supplier-dashboard" exact={true}>
                                <i className="icon fas fa-home"></i>
                                <span className="text">Dashboard</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/supplier-products">
                                <i className="icon fas fa-shopping-bag"></i>
                                <span className="text">Products</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/add-products">
                                <i className="icon fas fa-cart-plus"></i>
                                <span className="text">Add Products</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/supplier-category">
                                <i className="icon fas fa-list"></i>
                                <span className="text">Categories</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/supplier-orders">
                                <i className="icon fas fa-bags-shopping"></i>
                                <span className="text">Orders</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/supplier-users">
                                <i className="icon fas fa-user"></i>
                                <span className="text">Users</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link disabled" to="/supplier-sellers">
                                <i className="icon fas fa-store-alt"></i>
                                <span className="text">Sellers</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link disabled" to="/supplier-transaction">
                                <i className="icon fas fa-usd-circle"></i>
                                <span className="text">Transaction</span>
                            </NavLink>
                        </li>
                    </ul>
                    <br />
                    <br />
                </nav>
            </aside>
        </div>
    );
};

export default SupplierSidebar;
