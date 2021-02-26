import {ItemActionTypes} from "./item.types";

export const createItem = item => ({
    type: ItemActionTypes.CREATE_ITEM,
    payload: item
});

export const editItem = item => ({
    type: ItemActionTypes.EDIT_ITEM,
    payload: item
});

export const deleteItem = id => ({
    type: ItemActionTypes.DELETE_ITEM,
    payload: id
});

export const toggleItemForm = () => ({
    type: ItemActionTypes.TOGGLE_ITEM_FORM
});

export const toggleEditMode = () => ({
    type: ItemActionTypes.TOGGLE_EDIT_MODE,
});

export const checkDoneItem = item => ({
    type: ItemActionTypes.CHECK_DONE_ITEM,
    payload: item
});

export const setCurrentItem = item => ({
    type: ItemActionTypes.SET_CURRENT_ITEM,
    payload: item
});

export const itemActions = {
    createItem,
    editItem,
    deleteItem,
    toggleItemForm,
    toggleEditMode,
    checkDoneItem,
    setCurrentItem
}
