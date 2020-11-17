/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from './dashboardActions';
import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary();
  }

  render() {
    const { summary } = this.props;
    const { credit, debt } = summary;
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de Créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="bank"
              value={`R$ ${debt}`}
              text="Total de Débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="bank"
              value={`R$ ${credit - debt}`}
              text="Valor Consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ summary: state.dashboard.summary });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getSummary }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
