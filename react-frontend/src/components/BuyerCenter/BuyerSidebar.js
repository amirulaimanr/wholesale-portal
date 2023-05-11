import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

const BuyerSidebar = () => {
    return (
        <div>
            <aside className="navbar-aside pt-8 z-0" id="offcanvas-aside">
                <nav>
                    <ul className="menu-aside">
                        <li className="menu-item mt-8">
                            <NavLink activeClassName="active" className="menu-link" to="/buyer-center/home">
                                <i className="icon 	fas fa-home"></i>
                                <span className="text">Home</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/buyer-center/inquiries">
                                <i className="icon fas fa-envelope"></i>
                                <span className="text">Inquiries</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/buyer-center/rfq">
                                <i className="icon fas fa-weight"></i>
                                <span className="text">RFQs</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/buyer-center/orders">
                                <i className="icon fas fa-shopping-bag"></i>
                                <span className="text">Orders</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/buyer-center/favourites">
                                <i className="icon 	fas fa-heart"></i>
                                <span className="text">Favourites</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link" to="/buyer-center/userAccount">
                                <i className="icon fas fa-user"></i>
                                <span className="text">My Account</span>
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" className="menu-link disabled" to="/buyer-center/settings">
                                <i className="icon fas fa-cog"></i>
                                <span className="text">Settings</span>
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

export default BuyerSidebar;
