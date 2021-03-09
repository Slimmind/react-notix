import {combineReducers} from "redux";

import itemReducer from "./item/item.reducer";
import navPanelReducer from "./nav-panel/nav-panel.reducer";
import itemListTogglerReducer from "./item-list-toggler/item-list-toggler.reducer";

export default combineReducers({
    item: itemReducer,
    navPanel: navPanelReducer,
    itemListToggler: itemListTogglerReducer
});