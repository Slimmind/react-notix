import React, { useState } from "react";
import { connect } from "react-redux";

import generateID from "../../helpers/generate-id";
import getDate from "../../helpers/get-date";

import { NoteSelectors } from "../../store/note/note.selectors";

import { NoteActions } from "../../store/note/note.actions";

import InputField from "../input-field";
import TextAreaField from "../text-area-field";
import Controls from "../controls"
import Button from "../button";

import "./note-form.styles.scss";

const NoteForm = (props) => {
    const {
        currentNote,
        dispatchToggleNoteForm,
        dispatchCreateNote,
        dispatchEditNote,
        dispatchDeleteNote,
        dispatchSetCurrentNote,
        isEditMode,
        dispatchToggleEditMode } = props;

    const defaultFormData = {
        id: "",
        title: "",
        text: "",
        createdAt: "",
        color: "#fff"
    }

    const [formData, setFormData] = useState(currentNote);

    const handleChangeInput = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (isEditMode) {
            dispatchEditNote(formData);
            dispatchToggleEditMode();
            dispatchSetCurrentNote(defaultFormData);
        } else {
            formData.id = generateID();
            formData.createdAt = getDate();
            formData.expDate = formData.expDate ? formData.expDate : formData.createdAt;
            dispatchCreateNote(formData);
        }
        dispatchToggleNoteForm();
    }

    const handleCancel = () => {
        setFormData(defaultFormData);
        dispatchSetCurrentNote(defaultFormData);
        dispatchToggleNoteForm();
        dispatchToggleEditMode();
    }

    const handleDelete = () => {
        dispatchDeleteNote(currentNote.id);
        handleCancel();
    }

    return (
        <form
            className="create-note-form"
            onSubmit={handleSubmit}>
            <InputField
                type="text"
                name="title"
                placeholder="item title..."
                classes="input"
                value={formData.title || defaultFormData.title}
                handler={handleChangeInput}
            />
            <TextAreaField
                name="text"
                placeholder="item text..."
                classes="input"
                value={formData.text || defaultFormData.text}
                handler={handleChangeInput}
            />
            <InputField
                type="color"
                name="color"
                classes="input"
                value={formData.color || defaultFormData.color}
                handler={handleChangeInput}
            />

            <Controls type="stretch">
                <Button
                    classes="btn cancel-btn"
                    label="cancel"
                    handler={handleCancel}
                />
                {
                    isEditMode && <Button
                        classes="btn delete-btn"
                        label="delete"
                        handler={handleDelete}
                    />
                }
                <Button
                    type="submit"
                    classes="btn create-btn"
                    label="create"
                />
            </Controls>
        </form>
    );
}

const mapStateToProps = state => {
    return ({
        currentNote: noteSelectors.selectCurrentTodo(state),
        isEditMode: noteSelectors.selectEditMode(state)
    })
};

const mapDispatchToProps = dispatch => ({
    dispatchCreateNote: note => dispatch(noteActions.createTodo(note)),
    dispatchEditNote: note => dispatch(noteActions.editTodo(note)),
    dispatchDeleteNote: id => dispatch(noteActions.deleteTodo(id)),
    dispatchToggleNoteForm: () => dispatch(noteActions.toggleTodoForm()),
    dispatchSetCurrentNote: note => dispatch(noteActions.setCurrentTodo(note)),
    dispatchToggleEditMode: () => dispatch(noteActions.toggleEditMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
