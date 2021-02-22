import {NavPanelTypes} from "./nav-panel.types";

export const openMenu = () => ({
    type: NavPanelTypes.TOGGLE_MENU
});

export const setSearchQuery = query => ({
    type: NavPanelTypes.SET_SEARCH_QUERY,
    payload: query
});

export const navPanelActions = {
    openMenu,
    setSearchQuery
}