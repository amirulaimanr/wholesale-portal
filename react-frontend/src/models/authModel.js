// defines a Redux model for authentication that can be used in a React application to handle login, logout, and user creation operations.

import client from "../services/restClient";
// import mongoose from "mongoose";

// initialState

const initState = {
    user: {},
    isLoggedIn: false,
};

export const auth = {
    state: {
        ...initState,
    },
    reducers: {
        // handle state changes with pure functions
        update(state, newState) {
            return { ...state, ...newState };
        },
    },

    effects: (dispatch) => ({
        ///////////////
        //// LOGIN //// using feathers rest client
        ///////////////
        async login(data, reduxState) {
            return new Promise(async (resolve, reject) => {
                dispatch.loading.show();

                try {
                    let loginResponse = await client.authenticate({ ...data, strategy: "local" });
                    this.update({ isLoggedIn: true, user: loginResponse.user });
                    localStorage.setItem("userInfo", JSON.stringify(loginResponse.user));
                    localStorage.setItem("token", loginResponse.accessToken);
                    localStorage.setItem("role", loginResponse.user.role);
                    resolve();
                } catch (error) {
                    console.log("error", { error });
                    reject(error);
                }
                dispatch.loading.hide();
            });
        },
        /////////////////////////
        //// RE-AUTHENTICATE ////
        /////////////////////////
        async reAuth(data, reduxState) {
            return new Promise(async (resolve, reject) => {
                dispatch.loading.show();
                try {
                    let loginResponse = await client.reAuthenticate();
                    console.log(loginResponse);
                    this.update({ isLoggedIn: true, user: loginResponse.user });
                    resolve();
                } catch (error) {
                    console.log("error", { error });
                    reject(error);
                }
                dispatch.loading.hide();
            });
        },
        ////////////////
        //// LOGOUT ////
        ////////////////
        async logout(_, reduxState) {
            dispatch.loading.show();
            await client
                .logout()
                .then((res) => {
                    console.log("Logged out successfully!");
                    dispatch.toast.alert({ type: "success", message: "User Logout!" });
                    this.update(initState);
                })
                .catch((error) => {
                    console.log("error", { error });
                    dispatch.toast.alert({ type: "error", message: error.message || "Failed to logout!" });
                    this.update(initState);
                });
            window.localStorage.clear();
            window.sessionStorage.clear();
            dispatch.loading.hide();
        },

        //////////////////////
        //// CREATE USER ////
        //////////////////////
        async createUser(data, reduxState) {
            return new Promise(async (resolve, reject) => {
                dispatch.loading.show();
                try {
                    await client.service("users").create(data);
                    dispatch.toast.alert({ type: "success", title: "Sign Up", message: "Successful" });
                    resolve();
                } catch (error) {
                    console.log("error", { error });
                    dispatch.toast.alert({ type: "error", title: "Sign Up", message: error.message || "Failed to sign up" });
                    reject(error);
                }
                dispatch.loading.hide();
            });
        },
    }),
};
