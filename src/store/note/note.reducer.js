import {NoteActionTypes} from "./note.types";

const INITIAL_STATE = {
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
    isNoteFormVisible: false,
    currentNote: {},
    isEditMode: false
}

const noteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case NoteActionTypes.TOGGLE_NOTE_FORM:
            return {
                ...state,
                isTodoFormVisible: !state.isTodoFormVisible
            };
        case NoteActionTypes.CREATE_NOTE:
            return {
                ...state,
                noteList: [...state.noteList, action.payload]
            };
        case NoteActionTypes.EDIT_NOTE:
            return {
                ...state,
                noteList: state.noteList.map(item => {
                    return item.id === action.payload.id
                    ? action.payload
                    : item;
                })
            };
        case NoteActionTypes.DELETE_NOTE:
            return {
                ...state,
                noteList: state.noteList.filter(item => item.id !== action.payload)
            };
        case NoteActionTypes.TOGGLE_EDIT_MODE:
            return {
                ...state,
                isEditMode: !state.isEditMode
            }
        case NoteActionTypes.SET_CURRENT_NOTE:
            return {
                ...state,
                currentTodo: action.payload
            }
        default:
            return state;
    }
}

export default noteReducer;