import React from "react";
import {connect} from "react-redux";
import {itemActions} from "../../store/item/item.actions";
import {itemSelectors} from "../../store/item/item.selectors";

import "./note.styles.scss";

const Note = (props) => {
    const {
        note,
        dispatchSetCurrentItem,
        dispatchToggleItemForm,
        dispatchToggleEditMode
    } = props;

    const handlerEditNote = () => {
        dispatchToggleEditMode();
        dispatchSetCurrentItem(note);
        dispatchToggleItemForm();
    }

    return (
        <li 
            className="item note" 
            id={note.id}
            onClick={handlerEditNote}
        >
            <div className="bg" style={{backgroundColor: note.color}}></div>
            <h3 className="item-title">{note.title}</h3>
            <p className="item-text">{note.text}</p>
        </li>
    );
};

const mapStateToProps = state => ({
    currentItem: itemSelectors.selectCurrentItem(state)
});

const mapDispatchToProps = dispatch => ({
    dispatchSetCurrentItem: note => dispatch(itemActions.setCurrentItem(note)),
    dispatchToggleEditMode: () => dispatch(itemActions.toggleEditMode()),
    dispatchToggleItemForm: () => dispatch(itemActions.toggleItemForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Note);