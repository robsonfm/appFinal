/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../common/layout/grid';
import Row from '../common/layout/row';
import ValueBox from '../common/widget/valueBox';

function Summary({ credit, debt }) {
  return (
    <Grid cols="12">
      <fieldset>
        <legend>Resumo</legend>
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
            icon="credit-card"
            value={`R$ ${debt}`}
            text="Total de Débitos"
          />
          <ValueBox
            cols="12 4"
            color="blue"
            icon="money"
            value={`R$ ${credit - debt}`}
            text="Valor Consolidado"
          />
        </Row>
      </fieldset>
    </Grid>
  );
}

Summary.propTypes = {
  credit: PropTypes.number,
  debt: PropTypes.number,
};

Summary.defaultProps = {
  credit: '',
  debt: '',
};

export default Summary;
