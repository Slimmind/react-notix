import {createSelector} from "reselect";
import {isStringIncludes} from "../../helpers/is-string-includes";

import {selectSearchQuery} from "../nav-panel/nav-panel.selectors";

export const selectTodoList = state => state.item.todoList;

export const selectNoteList = state => state.item.noteList;

export const selectCurrentItem = state => state.item.currentItem;

export const selectEditMode = state => state.item.isEditMode;

export const selectIsItemFormVisible = state => state.todo.isItemFormVisible;

export const selectFilteredItemList = createSelector(
    selectItemList,
    selectSearchQuery,
    (list, searchQuery) => (
        searchQuery ? list.filter(listItem => {
            return (
                isStringIncludes(listItem.title, searchQuery) || 
                isStringIncludes(listItem.text, searchQuery) || 
                isStringIncludes(listItem.expDate, searchQuery)
            ) ? listItem : null;
        }) : list
    )
);

export const todoSelectors = {
    selectTodoList,
    selectCurrentItem,
    selectEditMode,
    selectIsItemFormVisible,
    selectFilteredItemList
}