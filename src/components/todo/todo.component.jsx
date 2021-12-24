import React, { useState } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { itemActions } from "../../store/item/item.actions";
import { itemSelectors } from "../../store/item/item.selectors";

import "./todo.styles.scss";

const Todo = ({
  todo,
  dispatchCheckDoneTodo,
  dispatchSetCurrentItem,
  dispatchToggleItemForm,
  dispatchToggleEditMode
}) => {
  const todoSymbol = todo.title.charAt(0);

  const handlerCheckTodo = (event) => {
    event.stopPropagation();
    dispatchCheckDoneTodo(todo.id);
    console.log("ID: ", todo.id);
  }

  const handlerEditTodo = () => {
    dispatchToggleEditMode();
    dispatchSetCurrentItem(todo);
    dispatchToggleItemForm();
  }

  return (
    <li
      className={classNames("item todo", todo.type, { done: todo.done })}
      id={todo.id}
      data-todo-symbol={todoSymbol}
      onClick={handlerEditTodo}
    >
      <h3 className="item-title">{todo.title}</h3>
      <p className="item-text">{todo.text}</p>
      <small className="todo-date">Due {todo.expDate}</small>
      <span
        className="check-btn"
        onClick={handlerCheckTodo}
      ></span>
    </li>
  );
}

const mapStateToProps = state => ({
  currentItem: itemSelectors.selectCurrentItem(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchCheckDoneTodo: id => dispatch(itemActions.checkDoneTodo(id)),
  dispatchSetCurrentItem: todo => dispatch(itemActions.setCurrentItem(todo)),
  dispatchToggleEditMode: () => dispatch(itemActions.toggleEditMode()),
  dispatchToggleItemForm: () => dispatch(itemActions.toggleItemForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);