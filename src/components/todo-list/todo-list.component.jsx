import React from "react";
import Todo from "../todo";
import {connect} from "react-redux";

import {selectFilteredTodoList} from "../../store/todo/todo.selectors";

const TodoList = ({filteredList}) => (
    <ul className="todo-list items-list">
        {
            filteredList.map(item => <Todo todo={item} key={item.id}/>)
        }
    </ul>
);

const mapStateToProps = state => ({
    filteredList: selectFilteredTodoList(state)
});

export default connect(mapStateToProps)(TodoList);