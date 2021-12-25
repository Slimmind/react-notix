import PropTypes from 'prop-types';

export const types = {
  id: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  handler: PropTypes.func.isRequired,
  label: PropTypes.string,
};