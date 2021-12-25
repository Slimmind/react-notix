import PropTypes from 'prop-types';

export const types = {
  note: PropTypes.object.isRequired,
  dispatchSetCurrentItem: PropTypes.func.isRequired,
  dispatchToggleItemForm: PropTypes.func.isRequired,
  dispatchToggleEditMode: PropTypes.func.isRequired
};