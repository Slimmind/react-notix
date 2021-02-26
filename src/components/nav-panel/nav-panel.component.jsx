import React from "react";
import {connect} from "react-redux";

import "./nav-panel.styles.scss";

import Controls from "../controls";
import Button from "../button";
import InputField from "../input-field";
import {navPanelActions} from "../../store/nav-panel/nav-panel.actions";
import {todoActions} from "../../store/todo/todo.actions";
import {noteActions} from "../../store/note/note.actions";
import {selectCurrentItemList} from "../../store/item-list-toggler/item-list-toggler.selectors";

const NavPanel = (props) => {
    const {dispatchToggleTodoForm, dispatchToggleNoteForm, dispatchSetSearchQuery, currentItemList} = props;

    const handlerSearch = ({target: {value}}) => {
        dispatchSetSearchQuery(value.toLowerCase());
    }

    const toggleItemForm = () => {
        if(currentItemList === "todo-list") {
            dispatchToggleTodoForm();
        } else {
            dispatchToggleNoteForm();
        }
    }

    return (
        <header className="nav-panel">
            <Controls type="stretch">
                <Button
                    classes="btn menu-btn"
                    label="open menu"
                />
                <InputField
                    type="search"
                    name="search"
                    placeholder="Search..."
                    classes="input"
                    handler={handlerSearch}
                />
                <Button 
                    classes="btn add-item-btn"
                    label="add item"
                    handler={toggleItemForm}
                />
            </Controls>
        </header>
    ); 
}

const mapStateToProps = state => {
    return ({
        currentItemList: selectCurrentItemList(state),
    })
};

const mapDispatchToProps = dispatch => ({
    dispatchToggleTodoForm: () => dispatch(todoActions.toggleTodoForm()),
    dispatchToggleNoteForm: () => dispatch(noteActions.toggleNoteForm()),
    dispatchSetSearchQuery: value => dispatch(navPanelActions.setSearchQuery(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavPanel);