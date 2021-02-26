import {combineReducers} from "redux";

import todoReducer from "./todo/todo.reducer";
import noteReducer from "./note/note.reducer";
import itemReducer from "./item/item.reducer";
import navPanelReducer from "./nav-panel/nav-panel.reducer";
import itemListTogglerReducer from "./item-list-toggler/item-list-toggler.reducer";

export default combineReducers({
    todo: todoReducer,
    note: noteReducer,
    note: itemReducer,
    navPanel: navPanelReducer,
    itemListToggler: itemListTogglerReducer
});