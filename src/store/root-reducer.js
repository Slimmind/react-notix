import {combineReducers} from "redux";

import todoReducer from "./todo/todo.reducer";
import navPanelReducer from "./nav-panel/nav-panel.reducer";

export default combineReducers({
    todo: todoReducer,
    navPanel: navPanelReducer
});