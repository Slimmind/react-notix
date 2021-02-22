import React from "react";
import {connect} from "react-redux";

import "./nav-panel.styles.scss";

import Controls from "../controls";
import Button from "../button";
import InputField from "../input-field";
import {navPanelActions} from "../../store/nav-panel/nav-panel.actions";
import {todoActions} from "../../store/todo/todo.actions";

const NavPanel = ({dispatchToggleTodoForm, dispatchSetSearchQuery}) => {

    const handlerSearch = ({target: {value}}) => {
        dispatchSetSearchQuery(value.toLowerCase());
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
                    handler={dispatchToggleTodoForm}
                />
            </Controls>
        </header>
    ); 
}

const mapDispatchToProps = dispatch => ({
    dispatchToggleTodoForm: () => dispatch(todoActions.toggleTodoForm()),
    dispatchSetSearchQuery: value => dispatch(navPanelActions.setSearchQuery(value))
});

export default connect(null, mapDispatchToProps)(NavPanel);