/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

export default ({ path, icon, label }) => (
  <li>
    <a href={path}>
      <i className={`fa fa-${icon}`} />
      {' '}
      <span>{label}</span>
    </a>
  </li>
);
