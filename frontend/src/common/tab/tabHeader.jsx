/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import If from '../operator/if';
import { selectTab } from './tabActions';

class TabHeader extends Component {
  render() {
    const {
      target, icon, label, selectTab, tab,
    } = this.props;
    const selected = tab.selected === target;
    const visible = tab.visible[target];
    return (
      <If test={visible}>
        <li className={selected ? 'active' : ''}>
          <a
            href="javascript:;"
            data-toggle="tab"
            onClick={() => selectTab(target)}
            data-tarfet={target}
          >
            <i className={`fa fa-${icon}`} />
            {label}
          </a>
        </li>
      </If>
    );
  }
}

const mapStateToProps = (state) => ({ tab: state.tab });
const mapDispatchToProps = (dispatch) => bindActionCreators({ selectTab }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
