/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function Input({
  input, placeholder, readOnly, type,
}) {
  return (
    <input
      {...input}
      className="form-control"
      placeholder={placeholder}
      readOnly={readOnly}
      type={type}
    />
  );
}

Input.propTypes = {
  input: PropTypes.any,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  input: '',
  placeholder: '',
  readOnly: false,
  type: 'text',
};

export default Input;
