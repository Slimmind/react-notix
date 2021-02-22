import {TodoActionTypes} from "./todo.types";

const INITIAL_STATE = {
    todoList: [
        {
            id: "123",
            title: "Test Todo",
            text: "First todo in the list",
            expDate: "2021-02-12",
            createdAt: "123456",
            type: "normal",
            done: false
        },
        {
            id: "234",
            title: "Test Todo",
            text: "Second todo in the list",
            expDate: "2021-03-16",
            createdAt: "123456",
            type: "attention",
            done: false
        },
        {
            id: "345",
            title: "Lorem ipsum dolor sit amet",
            text: "Third todo in the list",
            expDate: "2021-02-22",
            createdAt: "123456",
            type: "urgent",
            done: false
        }
    ],
    isTodoFormVisible: false,
    currentTodo: {},
    isEditMode: false
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case TodoActionTypes.TOGGLE_TODO_FORM:
            return {
                ...state,
                isTodoFormVisible: !state.isTodoFormVisible
            };
        case TodoActionTypes.CREATE_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            };
        case TodoActionTypes.EDIT_TODO:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    return item.id === action.payload.id
                    ? action.payload
                    : item;
                })
            };
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(item => item.id !== action.payload)
            };
        case TodoActionTypes.TOGGLE_EDIT_MODE:
            return {
                ...state,
                isEditMode: !state.isEditMode
            }
        case TodoActionTypes.CHECK_DONE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    return item.id === action.payload.id 
                    ? {...item, done: !item.done} 
                    : item;
                })
            }
        case TodoActionTypes.SET_CURRENT_TODO:
            return {
                ...state,
                currentTodo: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;