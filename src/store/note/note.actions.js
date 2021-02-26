import {NoteActionTypes} from "./note.types";

export const createNote = note => ({
    type: NoteActionTypes.CREATE_NOTE,
    payload: note
});

export const editNote = note => ({
    type: NoteActionTypes.EDIT_NOTE,
    payload: note
});

export const deleteNote = id => ({
    type: NoteActionTypes.DELETE_NOTE,
    payload: id
});

export const toggleNoteForm = () => ({
    type: NoteActionTypes.TOGGLE_NOTE_FORM
});

export const toggleEditMode = () => ({
    type: NoteActionTypes.TOGGLE_EDIT_MODE,
});

export const checkDoneNote = note => ({
    type: NoteActionTypes.CHECK_DONE_NOTE,
    payload: note
});

export const setCurrentNote = note => ({
    type: NoteActionTypes.SET_CURRENT_NOTE,
    payload: note
});

export const noteActions = {
    createNote,
    editNote,
    deleteNote,
    toggleNoteForm,
    toggleEditMode,
    checkDoneNote,
    setCurrentNote
}
