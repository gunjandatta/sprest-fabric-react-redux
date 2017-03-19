import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import Dashboard from "./components/dashboard";
import * as listActions from "./actions/listActions";
import {ContextInfo} from "gd-sprest";
import {Scripts} from "./scripts";

// Create the store
const store = configureStore();

/**
 * My Project
 **/
 class MyProject {
    // Initialization Method
    init(data, elementId, webUrl) {
        // See if the SharePoint environment exists (aka _spPageContextInfo exists)
        if(ContextInfo.existsFl) {
            // Render the component
            this.renderComponent(data, elementId, webUrl);
        } else {
            // Add a "load" event
            window.addEventListener("load", () => { this.renderComponent(data, elementId, webUrl); });
        }
    }

    // Render the component
    renderComponent(data, elementId, webUrl) {
        // Load the data
        store.dispatch(listActions.loadItems(data, webUrl) as any);

        // Get the element to render the component to and find the webpart containing this item
        let targetElement = document.getElementById(elementId);
        if(targetElement) {
            // Render the app
            render(
                <Provider store={store}>
                    <Dashboard />
                </Provider>,
                targetElement
            );
        };
    }

    // The reference to the "Script" module we wrote
    get Scripts() { return Scripts; }
}

// Make the class globally available
window["MyProject"] = new MyProject();