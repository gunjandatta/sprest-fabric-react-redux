import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Dashboard from "./components/dashboard";

const store = configureStore();

render(
    <Provider store={store}>
        <Dashboard />
    </Provider>,
    document.getElementById("app")
);