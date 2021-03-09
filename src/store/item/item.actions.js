import {ItemActionTypes} from "./item.types";

export const createItem = ({list, item}) => ({
    type: ItemActionTypes.CREATE_ITEM,
    payload: ({list, item})
});

export const editItem = ({list, editedItem}) => ({
    type: ItemActionTypes.EDIT_ITEM,
    payload: ({list, editedItem})
});

export const deleteItem = ({list, id}) => ({
    type: ItemActionTypes.DELETE_ITEM,
    payload: ({list, id})
});

export const toggleItemForm = () => ({
    type: ItemActionTypes.TOGGLE_ITEM_FORM
});

export const toggleEditMode = () => ({
    type: ItemActionTypes.TOGGLE_EDIT_MODE,
});

export const checkDoneTodo = id => ({
    type: ItemActionTypes.CHECK_DONE_TODO,
    payload: id
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
    checkDoneTodo,
    setCurrentItem
}
