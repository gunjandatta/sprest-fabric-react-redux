import ActionTypes from "./actionTypes";

// Action to hide the panel
export function hide() {
	return {
		type: ActionTypes.HidePanel,
		showPanel: false
	};
}

// Action to show the panel
export function show() {
	return {
		type: ActionTypes.ShowPanel,
		showPanel: true
	};
}
