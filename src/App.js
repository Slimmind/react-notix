import React from "react";
import {connect} from "react-redux";
import ItemListToggler from "./components/item-list-toggler";
import Popups from "./components/popups";
import TodoList from "./components/todo-list";
import NoteList from "./components/note-list";
import NavPanel from "./components/nav-panel";
import TodoForm from "./components/todo-form";

import {todoSelectors} from "./store/todo/todo.selectors";
import {selectCurrentItemList} from "./store/item-list-toggler/item-list-toggler.selectors";

function App(props) {
    const {isTodoFormVisible, currentItemList} = props;

    const itemList = currentItemList === "todo-list" ? <TodoList /> : <NoteList />

    return (
        <div className="App">
            <ItemListToggler/>
            {
                itemList
            }
            <Popups>
                {isTodoFormVisible && <TodoForm />}
            </Popups>
            <NavPanel />
        </div>
    );
}

const mapStateToProps = state => ({
    isTodoFormVisible: todoSelectors.selectIsTodoFormVisible(state),
    currentItemList: selectCurrentItemList(state)
});

export default connect(mapStateToProps)(App);
