import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const SupplierRoute = ({ component: Component, isAuthenticated, isSupplier, ...rest }) => {
    return <Route {...rest} render={(props) => (isAuthenticated && isSupplier ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />)} />;
};

const mapState = (state) => {
    const { isLoggedIn, user } = state.auth;
    return { isLoggedIn, role: user?.role };
};

export default connect(mapState, null)(SupplierRoute);
