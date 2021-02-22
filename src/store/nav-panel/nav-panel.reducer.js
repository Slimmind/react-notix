import {NavPanelTypes} from "./nav-panel.types";

const INITIAL_STATE = {
    openMenu: false,
    searchQuery: ""
}

const navPanelReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NavPanelTypes.TOGGLE_MENU:
            return {
                ...state,
                openMenu: !state.openMenu
            };
        case NavPanelTypes.SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.payload
            }
        default:
            return state;
    }
}

export default navPanelReducer;