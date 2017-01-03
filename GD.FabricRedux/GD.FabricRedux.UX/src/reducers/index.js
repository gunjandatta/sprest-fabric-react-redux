import {combineReducers} from "redux";
import dialog from "./dialogReducer";
import panel from "./panelReducer";

const rootReducer = combineReducers({
    dialog,
    panel
});

export default rootReducer;
