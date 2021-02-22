import {TodoActionTypes} from "./todo.types";

export const createTodo = todo => ({
    type: TodoActionTypes.CREATE_TODO,
    payload: todo
});

export const editTodo = todo => ({
    type: TodoActionTypes.EDIT_TODO,
    payload: todo
});

export const deleteTodo = id => ({
    type: TodoActionTypes.DELETE_TODO,
    payload: id
});

export const toggleTodoForm = () => ({
    type: TodoActionTypes.TOGGLE_TODO_FORM
});

export const toggleEditMode = () => ({
    type: TodoActionTypes.TOGGLE_EDIT_MODE,
});

export const checkDoneTodo = todo => ({
    type: TodoActionTypes.CHECK_DONE_TODO,
    payload: todo
});

export const setCurrentTodo = todo => ({
    type: TodoActionTypes.SET_CURRENT_TODO,
    payload: todo
});

export const todoActions = {
    createTodo,
    editTodo,
    deleteTodo,
    toggleTodoForm,
    toggleEditMode,
    checkDoneTodo,
    setCurrentTodo
}
