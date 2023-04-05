import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, role, allowedRoles, ...rest }) => {
    const isAuthorized = isLoggedIn && allowedRoles.includes(role);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthorized ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

const mapState = (state) => {
    const { isLoggedIn, user } = state.auth;
    return { isLoggedIn, role: user?.role };
};

export default connect(mapState, null)(ProtectedRoute);
