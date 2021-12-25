import PropTypes from 'prop-types';

export const types = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  classes: PropTypes.string,
  value: PropTypes.string,
  handler: PropTypes.func.isRequired,
};