/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import {
  init, create, update, deletar,
} from './billingCycleActions';

import List from './billingCycleList';
import Form from './billingCycleForm';

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    const { create, update, deletar } = this.props;
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="tras-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form onSubmit={create} submitLabel="Incluir" submitClass="primary" />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form onSubmit={update} submitLabel="Alterar" submitClass="info" />
              </TabContent>
              <TabContent id="tabDelete">
                <Form onSubmit={deletar} submitLabel="Excluir" submitClass="danger" readOnly />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  init, create, update, deletar,
}, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
