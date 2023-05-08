import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const BuyerRoute = ({ component: Component, isAuthenticated, isBuyer, ...rest }) => {
    return <Route {...rest} render={(props) => (isAuthenticated && isBuyer ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />)} />;
};

const mapState = (state) => {
    const { isLoggedIn, user } = state.auth;
    return { isLoggedIn, role: user?.role };
};

export default connect(mapState, null)(BuyerRoute);
