import ActionTypes from "./actionTypes";

// Action to hide the dialog
export function hide() {
	return {
		type: ActionTypes.HideDialog,
		showDialog: false
	};
}

// Action to show the dialog
export function show() {
	return {
		type: ActionTypes.ShowDialog,
		showDialog: true
	};
}
