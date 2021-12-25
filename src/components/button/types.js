import PropTypes from 'prop-types';

export const types = {
  type: PropTypes.string,
  classes: PropTypes.string,
  label: PropTypes.string.isRequired,
  handler: PropTypes.func,
  text: PropTypes.string
};