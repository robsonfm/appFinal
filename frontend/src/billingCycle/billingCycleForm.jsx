/* eslint-disable no-class-assign */
/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { init } from './billingCycleActions';
import LabelAndInput from '../common/form/labelAndInput';
import ItemList from './itemList';
import Summary from './summary';

class BillingCycleForm extends Component {
  calculateSummary() {
    const {
      credits, debts,
    } = this.props;
    const sum = (t, v) => t + v;
    const creditsA = !credits || credits.length === 0 ? [{}] : credits;
    const debtsA = !debts || debts.length === 0 ? [{}] : debts;
    return {
      sumOfCredits: creditsA.map((c) => +c.value || 0).reduce(sum),
      sumOfDebts: debtsA.map((d) => +d.value || 0).reduce(sum),
    };
  }

  render() {
    const {
      handleSubmit, init, readOnly, submitClass, submitLabel, credits, debts,
    } = this.props;
    const { sumOfCredits, sumOfDebts } = this.calculateSummary();
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            label="Nome"
            cols="12 4"
            placeholder="Infome o nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={LabelAndInput}
            type="number"
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={LabelAndInput}
            type="number"
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
            readOnly={readOnly}
          />
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend="Créditos"
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            showStatus
            field="debts"
            legend="Débitos"
          />
        </div>
        <div className="box-footer">
          <button
            type="submit"
            className={`btn btn-${submitClass}`}
          >
            {submitLabel}
          </button>
          <button
            type="button"
            className="btn btn-default"
            onClick={init}
          >
            Cancelar
          </button>

        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const selector = formValueSelector('billingCycleForm');

const mapStateToProps = (state) => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') });
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
