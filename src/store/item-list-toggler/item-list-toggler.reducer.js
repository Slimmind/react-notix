import {ItemListTogglerTypes} from "./item-list-toggler.types";

const INITIAL_STATE = {
    currentItemList: "todoList"
}

const itemListTogglerReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ItemListTogglerTypes.TOGGLE_ITEM_LIST:
            return {
                ...state,
                currentItemList: action.payload
            };
        default: 
            return state;
    }
}

export default itemListTogglerReducer;