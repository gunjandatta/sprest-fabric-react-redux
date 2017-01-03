import {combineReducers} from "redux";
import dialog from "./dialogReducer";
import list from "./listReducer";
import panel from "./panelReducer";

const rootReducer = combineReducers({
    dialog,
    list,
    panel
});

export default rootReducer;
