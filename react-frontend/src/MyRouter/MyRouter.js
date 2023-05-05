import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import { BrowserRouter as Router, Route, useLocation, useHistory, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import AppTopbar from "../AppTopbar";
import { AppFooter } from "../AppFooter";
import { AppMenu } from "../AppMenu";
import { AppConfigStatic } from "../AppConfigStatic";

import Dashboard from "../components/Dashboard/Dashboard";
import SupplierDashboard from "../components/SupplierDashboard/SupplierDashboard";
import ProtectedRoute from "./ProtectedRoute";
import SupplierRoute from "./SupplierRoute";

import PrimeReact from "primereact/api";

// css style
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "prismjs/themes/prism-coy.css";
import "../assets/demo/flags/flags.css";
import "../assets/demo/Demos.scss";
import "../assets/layout/layout.scss";
import "../App.scss";
import "../customStyles.css";

// import components
import LoginPage from "../components/LoginPage/LoginPage";
import SignUpPage from "../components/LoginPage/SignUpPage";
import NoMatch from "./NoMatch";
import MainLayout from "../components/Layouts/MainLayout";
import SupplierLayout from "../components/Layouts/SupplierLayout";
import LayoutSelector from "../components/Layouts/LayoutSelector";

import Account from "../components/Account/Account";
import ToastWrapper from "./wrappers/ToastWrapper";
import StartupWrapper from "./wrappers/StartupWrapper";
import LoadingWrapper from "./wrappers/LoadingWrapper";
import UsersPage from "../components/UsersPage/UsersPage";
import ProductScreen from "../components/SupplierDashboard/Screen/productScreen";
import AddProducts from "../components/SupplierDashboard/Screen/AddProducts";
import ProductsEditScreen from "../components/SupplierDashboard/Screen/ProductsEditScreen";
import CategoriesScreen from "../components/SupplierDashboard/Screen/CategoriesScreen";
import OrderScreen from "../components/SupplierDashboard/Screen/OrderScreen";
import OrderMain from "../components/SupplierDashboard/OrderComponents/OrderMain";
import OrderDetailsMain from "../components/SupplierDashboard/OrderComponents/OrderDetailsMain";
import OrderDetailsScreen from "../components/SupplierDashboard/Screen/OrderDetailsScreen";
import UsersScreen from "../components/SupplierDashboard/Screen/UsersScreen";
import CategoriesMain from "../components/Categories/CategoriesMain";
import ProductsDetails from "../components/Products/ProductsDetails";
import SendInquiry from "../components/Products/SendInquiry";
import RequestForQuotation from "../components/Products/RequestForQuotation";
// ~cb-add-import~

const MyRouter = () => {
    const [layoutMode, setLayoutMode] = useState("static");
    const [layoutColorMode, setLayoutColorMode] = useState("light");
    const [inputStyle, setInputStyle] = useState("outlined");
    const [ripple, setRipple] = useState(true);
    const [staticMenuInactive, setStaticMenuInactive] = useState(false);
    const [overlayMenuActive, setOverlayMenuActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);
    const [mobileTopbarMenuActive, setMobileTopbarMenuActive] = useState(false);
    const copyTooltipRef = useRef();
    const location = useLocation();
    const history = useHistory();

    PrimeReact.ripple = true;

    let menuClick = false;
    let mobileTopbarMenuClick = false;

    useEffect(() => {
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [mobileMenuActive]);

    useEffect(() => {
        copyTooltipRef && copyTooltipRef.current && copyTooltipRef.current.updateTargetEvents();
    }, [location]);

    const onInputStyleChange = (inputStyle) => {
        setInputStyle(inputStyle);
    };

    const onRipple = (e) => {
        PrimeReact.ripple = e.value;
        setRipple(e.value);
    };

    const onLayoutModeChange = (mode) => {
        setLayoutMode(mode);
    };

    const onColorModeChange = (mode) => {
        setLayoutColorMode(mode);
    };

    const onWrapperClick = (event) => {
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }

        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }

        mobileTopbarMenuClick = false;
        menuClick = false;
    };

    const onToggleMenuClick = (event) => {
        menuClick = true;

        if (isDesktop()) {
            if (layoutMode === "overlay") {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }

                setOverlayMenuActive((prevState) => !prevState);
                setMobileMenuActive(false);
            } else if (layoutMode === "static") {
                setStaticMenuInactive((prevState) => !prevState);
            }
        } else {
            setMobileMenuActive((prevState) => !prevState);
        }

        event.preventDefault();
    };

    const onMobileTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        setMobileTopbarMenuActive((prevState) => !prevState);
        event.preventDefault();
    };

    const onMobileSubTopbarMenuClick = (event) => {
        mobileTopbarMenuClick = true;

        event.preventDefault();
    };

    const isDesktop = () => {
        return window.innerWidth >= 992;
    };

    const addClass = (element, className) => {
        if (element.classList) element.classList.add(className);
        else element.className += " " + className;
    };

    const removeClass = (element, className) => {
        if (element.classList) element.classList.remove(className);
        else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };

    const wrapperClass = classNames("layout-wrapper", {
        "layout-overlay": layoutMode === "overlay",
        "layout-static": layoutMode === "static",
        "layout-static-sidebar-inactive": staticMenuInactive && layoutMode === "static",
        "layout-overlay-sidebar-active": overlayMenuActive && layoutMode === "overlay",
        "layout-mobile-sidebar-active": mobileMenuActive,
        "p-input-filled": inputStyle === "filled",
        "p-ripple-disabled": ripple === false,
        "layout-theme-light": layoutColorMode === "light",
    });

    // supplierRoute
    const isAuthenticated = localStorage.getItem("token") ? true : false;
    const isSupplier = localStorage.getItem("role") === "Supplier";

    // exclude path for render other components inside div
    const excludePaths = ["/login", "/signup", "/supplier-dashboard", "/supplier-products", "/add-products", "/supplier-category", "/supplier-orders", "/orders", "/supplier-users"];

    return (
        // <div>

        <div className={wrapperClass} onClick={onWrapperClick}>
            {excludePaths.includes(location.pathname) ? null : (
                <AppTopbar
                    onToggleMenuClick={onToggleMenuClick}
                    layoutColorMode={layoutColorMode}
                    mobileTopbarMenuActive={mobileTopbarMenuActive}
                    onMobileTopbarMenuClick={onMobileTopbarMenuClick}
                    onMobileSubTopbarMenuClick={onMobileSubTopbarMenuClick}
                    // onAccount={() => history.push("/account")}
                    // onSettings={() => history.push("/settings")}
                />
            )}

            {/* <div className="layout-sidebar" onClick={onSidebarClick}>
                <AppMenu model={menu} onMenuItemClick={onMenuItemClick} layoutColorMode={layoutColorMode} />
            </div> */}

            <LayoutSelector>
                <Switch>
                    <Route path="/" exact render={() => <Dashboard colorMode={layoutColorMode} location={location} />} />
                    <Route path="/dashboard" exact render={() => <Dashboard colorMode={layoutColorMode} location={location} />} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/signup" exact component={SignUpPage} />
                    <Route path="/account" component={Account} />
                    <Route path="/users" component={UsersPage} />
                    <Route path="/products/category/:category" component={CategoriesMain} />
                    <Route path="/products/:category/:id" component={ProductsDetails} />
                    <Route path="/request-for-quotation" component={RequestForQuotation} />
                    <ProtectedRoute path="/send-inquiry/:id" component={SendInquiry} />

                    {/* supplier-dashboard */}

                    <SupplierRoute exact path="/supplier-dashboard" component={SupplierDashboard} isAuthenticated={isAuthenticated} isSupplier={isSupplier} />
                    <SupplierRoute path="/supplier-products" component={ProductScreen} isAuthenticated={isAuthenticated} isSupplier={isSupplier} />
                    <SupplierRoute path="/add-products" component={AddProducts} isAuthenticated={isAuthenticated} isSupplier={isSupplier} />
                    <SupplierRoute path="/product/${product._id}/edit" component={ProductsEditScreen} isAuthenticated={isAuthenticated} isSupplier={isSupplier} />
                    <SupplierRoute path="/supplier-category" component={CategoriesScreen} isAuthenticated={isAuthenticated} isSupplier={isSupplier} />
                    <SupplierRoute path="/supplier-orders" component={OrderScreen} isAuthenticated={isAuthenticated} isSupplier={isSupplier} />
                    <SupplierRoute path="/orders" component={OrderDetailsScreen} isAuthenticated={isAuthenticated} isSupplier={isSupplier} />
                    <SupplierRoute path="/supplier-users" component={UsersScreen} isAuthenticated={isAuthenticated} isSupplier={isSupplier} />

                    <Route path="*" component={NoMatch} />
                </Switch>
            </LayoutSelector>

            <AppFooter layoutColorMode={layoutColorMode} />

            <LoadingWrapper />
            <ToastWrapper />
            <StartupWrapper />
            <AppConfigStatic rippleEffect={ripple} inputStyle={inputStyle} layoutMode={layoutMode} layoutColorMode={layoutColorMode} onColorModeChange={onColorModeChange} />
            <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                <div className="layout-mask p-component-overlay"></div>
            </CSSTransition>
        </div>
    );
};

export default MyRouter;
