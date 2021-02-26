import {createSelector} from "reselect";
import {isStringIncludes} from "../../helpers/is-string-includes";

import {selectSearchQuery} from "../nav-panel/nav-panel.selectors";

export const selectNoteList = state => state.note.noteList;

export const selectCurrentNote = state => state.note.currentNote;

export const selectEditMode = state => state.note.isEditMode;

export const selectIsNoteFormVisible = state => state.note.isNoteFormVisible;

export const selectFilteredNoteList = createSelector(
    selectNoteList,
    selectSearchQuery,
    (noteList, searchQuery) => (
        searchQuery ? noteList.filter(noteListItem => {
            return (
                isStringIncludes(noteListItem.title, searchQuery) || 
                isStringIncludes(noteListItem.text, searchQuery)
            ) ? noteListItem : null;
        }) : noteList
    )
);

export const noteSelectors = {
    selectNoteList,
    selectCurrentNote,
    selectEditMode,
    selectIsNoteFormVisible,
    selectFilteredNoteList
}