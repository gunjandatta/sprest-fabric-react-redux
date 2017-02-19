import ActionTypes from "./actionTypes";
import ListData from "../data/listData"

// Action to load the list items
export function loadItems(data, webUrl) {
    // See if the input is the list name
    if(typeof(data) === "string") {
        // Return a dispatch function
        return function(dispatch) {
            // Return a promise
            return ListData.getItems(data, webUrl).then(items => {
                // Load the items
                dispatch({
                    type: ActionTypes.LoadItems,
                    items
                });
            });
        }
    }

    // Parse the data
    let requests = [];
    for(let item of data.Row) {
        // Add the request
        requests.push({
            ID: item["ID"],
            Title: item["Title"],
            EIEMail: item["EIEMail"],
            EIAddress: item["EIAddress"],
            EICity: item["EICity"],
            EIState: item["EIState"],
            EIPostalCode: item["EIPostalCode"],
        });
    }

    // Return the list data
    return {
        type: ActionTypes.LoadItems,
        items: requests
    };
}
