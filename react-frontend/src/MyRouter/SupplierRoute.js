import React from "react";
import { Route, Redirect } from "react-router-dom";

const SupplierRoute = ({ component: Component, isAuthenticated, isSupplier, ...rest }) => {
    return <Route {...rest} render={(props) => (isAuthenticated && isSupplier ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />)} />;
};

export default SupplierRoute;
