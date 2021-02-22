import React from "react";
import {connect} from "react-redux";
import Popups from "./components/popups";
import TodoList from "./components/todo-list";
import NavPanel from "./components/nav-panel";
import TodoForm from "./components/todo-form";

import {todoSelectors} from "./store/todo/todo.selectors";

function App(props) {
    const {isTodoFormVisible} = props;

    return (
        <div className="App">
            <TodoList />
            <Popups>
                {isTodoFormVisible && <TodoForm />}
            </Popups>
            <NavPanel />
        </div>
    );
}

const mapStateToProps = state => ({
    isTodoFormVisible: todoSelectors.selectIsTodoFormVisible(state)
});

export default connect(mapStateToProps)(App);
