// The purpose of this component is to protect a route by only allowing access to authenticated users

import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, ...rest }) => {
    return (
        <Route
            // any additional props that are passed to the component
            {...rest}
            render={({ location }) =>
                // a boolean value that indicates whether the user is authenticated or no
                // checks whether login or not, if login its render child components otherwise redirect to login page
                isLoggedIn ? (
                    // the child components that will be rendered if the user is authenticated
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
    const { isLoggedIn } = state.auth;
    return { isLoggedIn };
};

const mapDispatch = (dispatch) => ({
    //
});

export default connect(mapState, null)(ProtectedRoute);
