import ActionTypes from "../actions/actionTypes"
import initalState from "./initialState";
import * as objectAssign from "object-assign";

export default function panelReducer(state = { showPanel: initalState.showPanel }, action) {
    switch(action.type) {
			// Handle the hide/show panel actions
			case ActionTypes.HidePanel:
			case ActionTypes.ShowPanel:
				// Return a copy of the current state
				return objectAssign(
					// Create a new blank object
					{},
					// Copy the default state
					state,
					// Update the "showPanel" state value
					{showPanel: action.showPanel}
				);

			// Action is not handled by this reducer, return the state
			default:
				return state;
    }
}
