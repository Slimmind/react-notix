import {ItemActionTypes} from "./item.types";

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
    noteList: [
        {
            id: "123",
            title: "Test Note",
            text: "First note in the list",
            createdAt: "123456",
            color: "#770077"
        },
        {
            id: "234",
            title: "Test Note",
            text: "Second note in the list",
            createdAt: "123456",
            color: "#007777"
        },
        {
            id: "345",
            title: "Lorem ipsum dolor sit amet",
            text: "Third todo in the list",
            createdAt: "123456",
            color: "#000077"
        }
    ],
    isItemFormVisible: false,
    currentItem: {},
    isEditMode: false
}

const itemReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ItemActionTypes.TOGGLE_ITEM_FORM:
            return {
                ...state,
                isItemFormVisible: !state.isItemFormVisible
            };
        case ItemActionTypes.CREATE_ITEM:
            console.log("TEST: ", action.payload);
            return {
                ...state,
                [action.payload.list]: [...state[action.payload.list], action.payload.item]
            };
        case ItemActionTypes.EDIT_ITEM:
            return {
                ...state,
                [action.payload.list]: state[action.payload.list].map(item => {
                    return item.id === action.payload.editedItem.id
                    ? action.payload.editedItem
                    : item;
                })
            };
        case ItemActionTypes.DELETE_ITEM:
            return {
                ...state,
                [action.payload.list]: state[action.payload.list].filter(item => item.id !== action.payload.id)
            };
        case ItemActionTypes.TOGGLE_EDIT_MODE:
            return {
                ...state,
                isEditMode: !state.isEditMode
            }
        case ItemActionTypes.SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        case ItemActionTypes.CHECK_DONE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    console.log("PAYLOAD: ", action.payload);
                    return item.id === action.payload
                    ? {...item, done: !item.done}
                    : item;
                })
            }
        default:
            return state;
    }
}

export default itemReducer;