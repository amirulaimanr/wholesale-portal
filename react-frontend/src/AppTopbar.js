import React, { useRef } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import classNames from "classnames";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { InputText } from "primereact/inputtext";
import { MegaMenu } from "primereact/megamenu";

const AppTopbar = (props) => {
    const history = useHistory();
    const userMenuRef = useRef(null);

    const toggleUserMenu = (e) => userMenuRef.current.toggle(e);
    const items = [
        {
            label: "Account",
            icon: "pi pi-flag",
            command: () => history.push("/account"),
        },
        {
            label: "LogOut",
            icon: "pi pi-fw pi-sign-out",
            template: (item) => {
                return (
                    <ul className="p-menu-list p-reset border-top-1 border-200">
                        <li className="p-menu-list p-reset">
                            <a className="p-menuitem-link" onClick={onLogout} role="menuitem">
                                <span className={"p-menuitem-icon pi pi-sign-out text-primary"}></span>
                                <span className={"p-menuitem-text text-primary"}>{item.label}</span>
                            </a>
                        </li>
                    </ul>
                );
            },
        },
    ];

    // nav wrapper left menu
    const left_items = [
        {
            label: "Languages",
            icon: "pi pi-fw pi-globe",
            items: [
                [
                    {
                        items: [{ label: "English" }, { label: "Deutsch" }, { label: "Português" }, { label: "Español" }],
                    },
                ],
            ],
        },
        {
            label: "More",
            icon: "pi pi-fw pi-users",
            items: [
                [
                    {
                        label: "Buyer Central",
                        items: [{ label: "Services" }, { label: "Logistic Services" }],
                    },
                    {
                        label: "Sell on Wholesale360",
                        items: [{ label: "For global suppliers" }, { label: "For chinese suppliers" }],
                    },
                ],
            ],
        },
        {
            label: "Help",
            icon: "pi pi-fw pi-calendar",
            items: [
                [
                    {
                        items: [{ label: "For buyers" }, { label: "For suppliers" }, { label: "Report abuse" }, { label: "Open case" }],
                    },
                ],
            ],
        },
    ];
    const right_items = [
        {
            label: "Favourites",
            icon: "pi pi-fw pi-heart",
        },
        {
            label: "Cart",
            icon: "pi pi-fw pi-shopping-cart",
        },
        {
            label: "Messages",
            icon: "pi pi-fw pi-comments",
        },
        {
            label: props.isLoggedIn ? props.user?.email : "Sign In | Register",
            icon: "pi pi-fw pi-user",

            items: [
                [
                    {
                        label: "Welcome Back!",
                        items: props.isLoggedIn
                            ? [
                                  {
                                      label: "Logout",
                                      template: (item) => {
                                          return (
                                              <ul className="p-menu-list p-reset border-top-1 border-200">
                                                  <li className="p-menu-list p-reset">
                                                      <a className="p-menuitem-link" onClick={onLogout} role="menuitem">
                                                          <span className=""></span>
                                                          <span className={"p-menuitem-text "}>My Account</span>
                                                      </a>
                                                  </li>
                                                  <li className="p-menu-list p-reset">
                                                      <a className="p-menuitem-link" onClick={onLogout} role="menuitem">
                                                          <span className=""></span>
                                                          <span className={"p-menuitem-text "}>My Orders</span>
                                                      </a>
                                                  </li>
                                                  <li className="p-menu-list p-reset">
                                                      <a className="p-menuitem-link" onClick={onLogout} role="menuitem">
                                                          <span className={"text-primary"}></span>
                                                          <span className={"p-menuitem-text text-primary"}>{item.label}</span>
                                                      </a>
                                                  </li>
                                              </ul>
                                          );
                                      },
                                  },
                              ]
                            : [
                                  { label: "Sign In", command: () => history.push("/login") },
                                  { label: "Register", command: () => history.push("/signup") },
                              ],
                    },
                ],
            ],
        },
    ];

    // logout

    const onLogout = async () => {
        try {
            await props.logout();
            history.replace("/");
            toggleUserMenu();
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="layout-topbar">
            <div className="nav-wrapper">
                <div className="nav-left">
                    <MegaMenu className="megamenu-left" model={left_items} breakpoint="960px" />
                </div>

                <div className="nav-right">
                    <MegaMenu className="megamenu-right" model={right_items} breakpoint="960px" />
                </div>
            </div>

            <div className="search-container">
                <div className="company-container">
                    <Link to="/">
                        <div className="company-items cursor-pointer min-w-max flex align-items-end">
                            {/* <img src={"assets/logo/cb-logo.svg"} height={30} className="mb-1 mr-2" /> */}
                            <h3 className="text-orange-500" style={{ fontFamily: "MarlinGeo", fontWeight: "bolder", margin: 0 }}>
                                Wholesale360
                            </h3>
                        </div>
                    </Link>
                </div>
                <div className="search-wrapper">
                    <div className="p-inputgroup flex-1 w-28rem">
                        <InputText placeholder="Search" />
                        <Button icon="pi pi-search" className="p-button-warning" />
                    </div>
                </div>
                <div className="request-container">
                    <div className="left-request">
                        <div className="logo-request">
                            <i className="pi pi-box" style={{ fontSize: "2.2rem" }}></i>
                        </div>
                        <div className="text-request">Request for Quotation</div>
                    </div>
                    <div className="right-request">
                        <div className="logo-orders">
                            <i className="pi pi-inbox" style={{ fontSize: "2.2rem" }}></i>
                        </div>
                        <div className="text-orders">Orders</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapState = (state) => {
    const { isLoggedIn, user } = state.auth;
    return { isLoggedIn, user };
};
const mapDispatch = (dispatch) => ({
    logout: () => dispatch.auth.logout(),
});

export default connect(mapState, mapDispatch)(AppTopbar);
