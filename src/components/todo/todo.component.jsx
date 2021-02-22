import React, {useState} from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import { todoActions } from "../../store/todo/todo.actions";
import {todoSelectors} from "../../store/todo/todo.selectors";

import "./todo.styles.scss";

const Todo = (props) => {
    const {
        todo, 
        dispatchCheckDoneTodo,
        dispatchSetCurrentTodo,
        dispatchToggleTodoForm,
        dispatchToggleEditMode
    } = props;
    const todoSymbol = todo.title.charAt(0);
    const [checkTodo, setCheckTodo] = useState(todo);

    const handlerCheckTodo = (event) => {
        event.stopPropagation();
        setCheckTodo({...checkTodo, done: !todo.done});
        dispatchCheckDoneTodo(checkTodo);
    }

    const handlerEditTodo = () => {
        dispatchToggleEditMode();
        dispatchSetCurrentTodo(todo);
        dispatchToggleTodoForm();
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
    currentTodo: todoSelectors.selectCurrentTodo(state)
});

const mapDispatchToProps = dispatch => ({
    dispatchCheckDoneTodo: todo => dispatch(todoActions.checkDoneTodo(todo)),
    dispatchSetCurrentTodo: todo => dispatch(todoActions.setCurrentTodo(todo)),
    dispatchToggleEditMode: () => dispatch(todoActions.toggleEditMode()),
    dispatchToggleTodoForm: () => dispatch(todoActions.toggleTodoForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);