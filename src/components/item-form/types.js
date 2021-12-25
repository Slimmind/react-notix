import PropTypes from 'prop-types';

export const types = {
  currentItem: PropTypes.object.isRequired,
  currentItemList: PropTypes.string.isRequired,
  dispatchToggleItemForm: PropTypes.func.isRequired,
  dispatchCreateItem: PropTypes.func.isRequired,
  dispatchEditItem: PropTypes.func.isRequired,
  dispatchDeleteItem: PropTypes.func.isRequired,
  dispatchSetCurrentItem: PropTypes.func.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  dispatchToggleEditMode: PropTypes.func.isRequired
};