import React, { useState } from "react";
import { connect } from "react-redux";

import generateID from "../../helpers/generate-id";
import getDate from "../../helpers/get-date";

import { todoSelectors } from "../../store/todo/todo.selectors";

import { todoActions } from "../../store/todo/todo.actions";

import InputField from "../input-field";
import TextAreaField from "../text-area-field";
import Controls from "../controls"
import Button from "../button";

import "./todo-form.styles.scss";

const TodoForm = (props) => {
    const {
        currentTodo,
        dispatchToggleTodoForm,
        dispatchCreateTodo,
        dispatchEditTodo,
        dispatchDeleteTodo,
        dispatchSetCurrentTodo,
        isEditMode,
        dispatchToggleEditMode } = props;

    const defaultFormData = {
        id: "",
        title: "",
        text: "",
        type: "normal",
        createdAt: "",
        expDate: "",
        done: false
    }

    const [formData, setFormData] = useState(currentTodo);

    const handleChangeInput = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (isEditMode) {
            dispatchEditTodo(formData);
            dispatchToggleEditMode();
            dispatchSetCurrentTodo(defaultFormData);
        } else {
            formData.id = generateID();
            formData.createdAt = getDate();
            formData.expDate = formData.expDate ? formData.expDate : formData.createdAt;
            dispatchCreateTodo(formData);
        }
        dispatchToggleTodoForm();
    }

    const handleCancel = () => {
        setFormData(defaultFormData);
        dispatchSetCurrentTodo(defaultFormData);
        dispatchToggleTodoForm();
        dispatchToggleEditMode();
    }

    const handleDelete = () => {
        dispatchDeleteTodo(currentTodo.id);
        handleCancel();
    }

    return (
        <form
            className="create-todo-form"
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
                type="date"
                name="expDate"
                classes="input"
                value={formData.expDate || defaultFormData.expDate}
                handler={handleChangeInput}
            />

            <Controls type="center">
                <InputField
                    id="type-normal"
                    type="radio"
                    name="type"
                    classes="todo-status normal"
                    label="Normal"
                    value="normal"
                    handler={handleChangeInput}
                    checked={formData.type === "normal"}
                />
                <InputField
                    id="type-attention"
                    type="radio"
                    name="type"
                    classes="todo-status attention"
                    label="Attention"
                    value="attention"
                    handler={handleChangeInput}
                    checked={formData.type === "attention"}
                />
                <InputField
                    id="type-urgent"
                    type="radio"
                    name="type"
                    classes="todo-status urgent"
                    label="Urgent"
                    value="urgent"
                    handler={handleChangeInput}
                    checked={formData.type === "urgent"}
                />
            </Controls>

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
        currentTodo: todoSelectors.selectCurrentTodo(state),
        isEditMode: todoSelectors.selectEditMode(state)
    })
};

const mapDispatchToProps = dispatch => ({
    dispatchCreateTodo: todo => dispatch(todoActions.createTodo(todo)),
    dispatchEditTodo: todo => dispatch(todoActions.editTodo(todo)),
    dispatchDeleteTodo: id => dispatch(todoActions.deleteTodo(id)),
    dispatchToggleTodoForm: () => dispatch(todoActions.toggleTodoForm()),
    dispatchSetCurrentTodo: todo => dispatch(todoActions.setCurrentTodo(todo)),
    dispatchToggleEditMode: () => dispatch(todoActions.toggleEditMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
