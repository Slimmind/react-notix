import React from "react";
import {connect} from "react-redux";
import InputField from "../input-field";
import {selectCurrentItemList} from "../../store/item-list-toggler/item-list-toggler.selectors";
import {toggleItemList} from "../../store/item-list-toggler/item-list-toggler.actions";
import "./item-list-toggler.styles.scss";

const ItemListToggler = (props) => {
    const {currentItemList, dispatchToggleItemList} = props;

    const handleChangeInput = ({ target: { value } }) => {
        dispatchToggleItemList(value);
    }
    return (
        <div className="item-toggler">
            <InputField
                id="todo-list"
                type="radio"
                name="toggle-item-list"
                value="todoList"
                checked={currentItemList === "todoList"}
                label="Todo List"
                handler={handleChangeInput}
            />
            <InputField
                id="note-list"
                type="radio"
                name="toggle-item-list"
                value="noteList"
                checked={currentItemList === "noteList"}
                label="Note List"
                handler={handleChangeInput}
            />
        </div>
    );
}

const mapStateToProps = state => ({
    currentItemList: selectCurrentItemList(state)
});

const mapDispatchToProps = dispatch => ({
    dispatchToggleItemList: listType => dispatch(toggleItemList(listType))
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemListToggler);
