import React, { useState } from "react";
import { connect } from "react-redux";

import generateID from "../../helpers/generate-id";
import getDate from "../../helpers/get-date";

import { itemSelectors } from "../../store/item/item.selectors";
import { selectCurrentItemList } from "../../store/item-list-toggler/item-list-toggler.selectors";

import { itemActions } from "../../store/item/item.actions";

import InputField from "../input-field";
import TextAreaField from "../text-area-field";
import Controls from "../controls"
import Button from "../button";

import "./item-form.styles.scss";

const ItemForm = (props) => {
    const {
        currentItem,
        currentItemList,
        dispatchToggleItemForm,
        dispatchCreateItem,
        dispatchEditItem,
        dispatchDeleteItem,
        dispatchSetCurrentItem,
        isEditMode,
        dispatchToggleEditMode } = props;

    const defaultTodoData = {
        id: "",
        title: "",
        text: "",
        type: "normal",
        createdAt: "",
        expDate: "",
        done: false
    }

    const defaultNoteData = {
        id: "",
        title: "",
        text: "",
        createdAt: "",
        color: "#cdcdcd"
    }

    const [formData, setFormData] = useState(currentItem);

    const handleChangeInput = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    let defaultFormData = currentItemList === "todoList" ? defaultTodoData : defaultNoteData;

    const specifiedFormFields = currentItemList === "noteList"
        ? <InputField
            type="color"
            name="color"
            classes="input"
            value={formData.color || defaultFormData.color}
            handler={handleChangeInput}
        />
        : <>
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
        </>

    const handleSubmit = event => {
        event.preventDefault();
        if (isEditMode) {
            dispatchEditItem({list: currentItemList, editedItem: formData});
            dispatchToggleEditMode();
            dispatchSetCurrentItem(defaultFormData);
        } else {
            formData.id = generateID();
            formData.createdAt = getDate();
            if(currentItemList === "todoList") {
                formData.expDate = formData.expDate ? formData.expDate : formData.createdAt;
            }
            dispatchCreateItem({list: currentItemList, item: formData});
        }
        dispatchToggleItemForm();
    }

    const handleCancel = () => {
        setFormData(defaultFormData);
        dispatchSetCurrentItem(defaultFormData);
        dispatchToggleItemForm();
        dispatchToggleEditMode();
    }

    const handleDelete = () => {
        dispatchDeleteItem({list: currentItemList, id: currentItem.id});
        handleCancel();
    }

    return (
        <form
            className="item-form"
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

            {
                specifiedFormFields
            }

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
        currentItem: itemSelectors.selectCurrentItem(state),
        isEditMode: itemSelectors.selectEditMode(state),
        currentItemList: selectCurrentItemList(state)
    })
};

const mapDispatchToProps = dispatch => ({
    dispatchCreateItem: ({list, item}) => dispatch(itemActions.createItem({list, item})),
    dispatchEditItem: ({list, editedItem}) => dispatch(itemActions.editItem({list, editedItem})),
    dispatchDeleteItem: (list, id) => dispatch(itemActions.deleteItem(list, id)),
    dispatchToggleItemForm: () => dispatch(itemActions.toggleItemForm()),
    dispatchSetCurrentItem: item => dispatch(itemActions.setCurrentItem(item)),
    dispatchToggleEditMode: () => dispatch(itemActions.toggleEditMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);
