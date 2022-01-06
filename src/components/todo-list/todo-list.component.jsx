import React from "react";
import Todo from "../todo";
import { connect } from "react-redux";

import { selectFilteredTodoList } from "../../store/item/item.selectors";

import { types } from './types';

import "./todo-list.styles.scss";

const TodoList = ({ filteredList }) => (
  <ul className="todo-list items-list">
    {
      filteredList.map(item => <Todo todo={item} key={item.id} />)
    }
  </ul>
);

const mapStateToProps = state => ({
  filteredList: selectFilteredTodoList(state)
});

TodoList.propTypes = types;

export default connect(mapStateToProps)(TodoList);