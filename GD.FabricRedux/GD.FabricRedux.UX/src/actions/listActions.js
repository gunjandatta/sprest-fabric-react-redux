import ActionTypes from "./actionTypes";
import List from "../data/listData"

// Action to load the list items
export function loadItems() {
	// Return a dispatch function
    return function(dispatch) {
		// Return a promise
        return List.getItems().then(items => {
			// Load the items
            dispatch({
                type: ActionTypes.LoadItems,
                items
            });
        });
    }
}
