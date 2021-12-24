import React from "react";
import {connect} from "react-redux";
import ItemListToggler from "./components/item-list-toggler";
import Popups from "./components/popups";
import TodoList from "./components/todo-list";
import NoteList from "./components/note-list";
import NavPanel from "./components/nav-panel";
import ItemForm from "./components/item-form";

import {itemSelectors} from "./store/item/item.selectors";
import {selectCurrentItemList} from "./store/item-list-toggler/item-list-toggler.selectors";

function App(props) {
  const {isItemFormVisible, currentItemList} = props;

  const itemList = currentItemList === "todoList" ? <TodoList /> : <NoteList />

  return (
    <div className="App">
      <ItemListToggler/>
      {
        itemList
      }
      <Popups>
        {isItemFormVisible && <ItemForm />}
      </Popups>
      <NavPanel />
    </div>
  );
}

const mapStateToProps = state => ({
  isItemFormVisible: itemSelectors.selectIsItemFormVisible(state),
  currentItemList: selectCurrentItemList(state)
});

export default connect(mapStateToProps)(App);
