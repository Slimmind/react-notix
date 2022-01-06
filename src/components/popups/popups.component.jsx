import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { itemActions } from "../../store/item/item.actions";

import "./popups.styles.scss";

import { types } from './types';

const Popups = ({ children, dispatchToggleItemForm }) => {
  return (
    <>
      <div
        className={classNames("popup-overlay", { active: children })}
        onClick={dispatchToggleItemForm} />
      <div className={
        classNames("popups", {
          active: children
        })
      }>
        {children}
      </div>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  dispatchToggleItemForm: () => dispatch(itemActions.toggleItemForm())
});

Popups.propTypes = types;

export default connect(null, mapDispatchToProps)(Popups);