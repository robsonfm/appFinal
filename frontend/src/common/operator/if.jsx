// import React from 'react';
import PropTypes from 'prop-types';

function If({ test, children }) {
  if (test) {
    return children;
  }
  return false;
}

If.propTypes = {
  test: PropTypes.bool,
  children: PropTypes.element,
};

If.defaultProps = {
  icon: '',
  label: '',
  children: '',
};

export default If;
