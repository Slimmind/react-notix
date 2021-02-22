import {createSelector} from "reselect";
import {isStringIncludes} from "../../helpers/is-string-includes";

import {selectSearchQuery} from "../nav-panel/nav-panel.selectors";

export const selectTodoList = state => state.todo.todoList;

export const selectCurrentTodo = state => state.todo.currentTodo;

export const selectEditMode = state => state.todo.isEditMode;

export const selectIsTodoFormVisible = state => state.todo.isTodoFormVisible;

export const selectFilteredTodoList = createSelector(
    selectTodoList,
    selectSearchQuery,
    (todoList, searchQuery) => (
        searchQuery ? todoList.filter(todoListItem => {
            return (
                isStringIncludes(todoListItem.title, searchQuery) || 
                isStringIncludes(todoListItem.text, searchQuery) || 
                isStringIncludes(todoListItem.expDate, searchQuery)
            ) ? todoListItem : null;
        }) : todoList
    )
);

export const todoSelectors = {
    selectTodoList,
    selectCurrentTodo,
    selectEditMode,
    selectIsTodoFormVisible,
    selectFilteredTodoList
}