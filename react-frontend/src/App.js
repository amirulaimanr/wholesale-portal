// initializes the Redux store using @rematch/core, sets up the Provider component from react-redux, and renders the MyRouter component, which handles the routing of the application

import React, { Component } from "react";
import { init } from "@rematch/core";
import { Provider } from "react-redux";

import * as models from "./models";
import MyRouter from "./MyRouter/MyRouter";

class App extends Component {
    render() {
        const store = init({ models });

        return (
            <Provider store={store}>
                {/* <PersistGate persistor={getPersistor()}> */}
                <MyRouter />
                {/* </PersistGate> */}
            </Provider>
        );
    }
}

export default App;
