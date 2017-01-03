import ActionTypes from "../actions/actionTypes"
import initalState from "./initialState";

export default function dialogReducer(state = initalState.showDialog, action) {
    switch(action.type) {
			// Handle the hide/show dialog actions
			case ActionTypes.HideDialog:
			case ActionTypes.ShowDialog:
				// Return a copy of the current state
				return Object.assign(
					// Create a new blank object
					{},
					// Copy the default state
					state,
					// Update the "showDialog" state value
					{showDialog: action.showDialog}
				);

			// Action is not handled by this reducer, return the state
			default:
					return state;
    }
}
