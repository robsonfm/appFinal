import React from 'react';
import PropTypes from 'prop-types';

const MenuTree = ({ icon, label, children }) => (
  <li className="treeview">
    <a href>
      <i className={`fa fa-${icon}`} />
      <span>{label}</span>
      <i className="fa fa-angle-left pull-right" />

    </a>
    <ul className="treeview-menu">
      {children}
    </ul>
  </li>
);

MenuTree.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.element,
};

MenuTree.defaultProps = {
  icon: '',
  label: '',
  children: '',
};

export default MenuTree;
