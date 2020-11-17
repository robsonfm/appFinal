/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../layout/grid';

function LabelAndInput({
  cols,
  name,
  label,
  input,
  placeholder,
  readOnly,
  type,
}) {
  return (
    <Grid cols={cols}>
      <label htmlFor={name}>{label}</label>
      <input
        {...input}
        className="form-control"
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
      />
    </Grid>
  );
}

LabelAndInput.propTypes = {
  cols: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.instanceOf(Object),
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  type: PropTypes.string,
};

LabelAndInput.defaultProps = {
  cols: '',
  name: '',
  label: '',
  input: '',
  placeholder: '',
  readOnly: false,
  type: '',
};

export default LabelAndInput;
