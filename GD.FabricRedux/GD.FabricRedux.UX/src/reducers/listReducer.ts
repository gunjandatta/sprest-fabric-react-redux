import ActionTypes from "../actions/actionTypes"
import initalState from "./initialState";
import * as objectAssign from "object-assign";

export default function panelReducer(state = { items: initalState.items }, action) {
    switch(action.type) {
			// Handle the load items action
            case ActionTypes.LoadItems:
				// Return a copy of the current state
				return objectAssign(
					// Create a new blank object
					{},
					// Copy the default state
					state,
					// Update the "showPanel" state value
					{items: action.items}
				);

			// Action is not handled by this reducer, return the state
			default:
                return state;
    }
}
