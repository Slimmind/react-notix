import {ItemListTogglerTypes} from "./item-list-toggler.types";

export const toggleItemList = listType => ({
    type: ItemListTogglerTypes.TOGGLE_ITEM_LIST,
    payload: listType
}); 