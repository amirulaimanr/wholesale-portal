import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import "./Style/SupplierHeader.css";

const SupplierHeader = () => {
    useEffect(() => {
        $("[data-trigger]").on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            var offcanvas_id = $(this).attr("data-trigger");
            $(offcanvas_id).toggleClass("show");
        });

        $(".btn-aside-minimize").on("click", function () {
            if (window.innerWidth < 768) {
                $("body").removeClass("aside-mini");
                $(".navbar-aside").removeClass("show");
            } else {
                // minimize sidebar on desktop
                $("body").toggleClass("aside-mini");
            }
        });
    }, []);

    return (
        <header className="main-header navbar">
            <div className="col-search">
                <form className="searchform">
                    <div className="p-inputgroup">
                        <InputText list="search_terms" type="text" placeholder="Search term" />
                        <Button icon="pi pi-search" className="p-button-warning" />
                    </div>
                    <datalist id="search_terms">
                        <option value="Products" />
                        <option value="New Orders" />
                        <option value="Apple iphone" />
                        <option value="Amirul" />
                    </datalist>
                </form>
            </div>
            <div className="col-nav">
                <button className="btn btn-icon btn-mobile me-auto" data-trigger="#offcanvas_aside">
                    <i className="md-28 fas fa-bars"></i>
                </button>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className={`nav-link btn-icon`} title="Dark mode" to="#"></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn-icon" to="#">
                            <i className="fas fa-bell"></i>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            English
                        </Link>
                    </li>
                    <li className="dropdown nav-item">
                        <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
                            <img></img>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end">
                            <Link className="dropdown-item" to="/">
                                My Profile
                            </Link>
                            <Link className="dropdown-item" to="#">
                                Settings
                            </Link>
                            <Link className="dropdown-item" to="#">
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default SupplierHeader;
