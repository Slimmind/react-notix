import PropTypes from "prop-types";

export const types = {
  todo: PropTypes.object.isRequired,
  dispatchCheckDoneTodo: PropTypes.func.isRequired,
  dispatchSetCurrentItem: PropTypes.func.isRequired,
  dispatchToggleItemForm: PropTypes.func.isRequired,
  dispatchToggleEditMode: PropTypes.func.isRequired,
};