import React from "react";
import { connect } from "react-redux";

import "./nav-panel.styles.scss";

import Controls from "../controls";
import Button from "../button";
import InputField from "../input-field";
import { navPanelActions } from "../../store/nav-panel/nav-panel.actions";
import { itemActions } from "../../store/item/item.actions";

const NavPanel = ({ dispatchToggleItemForm, dispatchSetSearchQuery }) => {
  const handlerSearch = ({ target: { value } }) => {
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
          handler={dispatchToggleItemForm}
        />
      </Controls>
    </header>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatchToggleItemForm: () => dispatch(itemActions.toggleItemForm()),
  dispatchSetSearchQuery: value => dispatch(navPanelActions.setSearchQuery(value))
});

export default connect(null, mapDispatchToProps)(NavPanel);