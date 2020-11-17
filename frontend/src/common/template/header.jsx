/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

export default () => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini">
        <b>My</b>
        M
      </span>
      <span className="logo-lg">
        <i className="fa fa-money" />
        <b> My</b>
        {' '}
        Money
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href className="sidebar-toggle" data-toggle="offcanvas" />

    </nav>
  </header>
);
