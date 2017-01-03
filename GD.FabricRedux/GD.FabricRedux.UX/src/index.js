import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Dashboard from "./components/dashboard";
import * as listActions from "./actions/listActions";

const store = configureStore();
store.dispatch(listActions.loadItems());

render(
    <Provider store={store}>
        <Dashboard />
    </Provider>,
    document.getElementById("app")
);