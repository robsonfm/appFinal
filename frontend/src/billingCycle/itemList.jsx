/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import PropTypes from 'prop-types';

import Grid from '../common/layout/grid';
import Input from '../common/form/input';
import If from '../common/operator/if';

// const ItemList = ({
//   cols,
//   readOnly,
//   showStatus,
//   list,
//   field,
//   legend,
//   arrayInsert,
//   arrayRemove,
// }) => {
//   const add = (index, item = {}) => {
//     if (!readOnly) {
//       arrayInsert('billingCycleForm', field, index, item);
//     }
//   };

//   const remove = (index) => {
//     if (!readOnly && list.length > 1) {
//       arrayRemove('billingCycleForm', field, index);
//     }
//   };

//   const renderRows = () => {
//     const {
//       readOnly, list, field, showStatus,
//     } = this.props;

//     const listA = !list || list.length === 0 ? [{}] : list;

//     return listA.map((item, index) => (
//       <tr key={index}>
//         <td>
//           <Field
//             name={`${field}[${index}].name`}
//             component={Input}
//             placeholder="Informe o nome"
//             readOnly={readOnly}
//           />
//         </td>
//         <td>
//           <Field
//             name={`${field}[${index}].value`}
//             component={Input}
//             placeholder="Informe o valor"
//             readOnly={readOnly}
//           />
//         </td>
//         <If test={showStatus}>
//           <td>
//             <Field
//               name={`${field}[${index}].status`}
//               component={Input}
//               placeholder="Informe o status"
//               readOnly={readOnly}
//             />
//           </td>
//         </If>
//         <td>
//           <button type="button" className="btn btn-success" onClick={() => add(index + 1)}>
//             <i className="fa fa-plus" />
//           </button>
//           <button type="button" className="btn btn-warning" onClick={() => add(index + 1, item)}>
//             <i className="fa fa-clone" />
//           </button>
//           <button type="button" className="btn btn-danger" onClick={() => remove(index)}>
//             <i className="fa fa-trash" />
//           </button>
//         </td>
//       </tr>
//     ));
//   };

//   return (
//     <Grid cols={cols}>
//         <fieldset>
//           <legend>{legend}</legend>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Nome</th>
//                 <th>Valor</th>
//                 <If test={showStatus}>
//                   <th>Status</th>
//                 </If>
//                 <th className="table-actions">Ações</th>
//               </tr>
//             </thead>
//             <tbody>
//               {renderRows()}
//             </tbody>
//           </table>
//         </fieldset>
//       </Grid>
//   )
// }

class ItemList extends Component {
  add(index, item = {}) {
    const { readOnly, arrayInsert, field } = this.props;

    if (!readOnly) {
      arrayInsert('billingCycleForm', field, index, item);
    }
  }

  remove(index) {
    const {
      readOnly, arrayRemove, list, field,
    } = this.props;
    if (!readOnly && list.length > 1) {
      arrayRemove('billingCycleForm', field, index);
    }
  }

  renderRows() {
    const {
      readOnly, list, field, showStatus,
    } = this.props;

    const listA = !list || list.length === 0 ? [{}] : list;

    return listA.map((item, index) => (
      <tr key={index}>
        <td>
          <Field
            name={`${field}[${index}].name`}
            component={Input}
            placeholder="Informe o nome"
            readOnly={readOnly}
          />
        </td>
        <td>
          <Field
            name={`${field}[${index}].value`}
            component={Input}
            placeholder="Informe o valor"
            readOnly={readOnly}
          />
        </td>
        <If test={showStatus}>
          <td>
            <Field
              name={`${field}[${index}].status`}
              component={Input}
              placeholder="Informe o status"
              readOnly={readOnly}
            />
          </td>
        </If>
        <td>
          <button type="button" className="btn btn-success" onClick={() => this.add(index + 1)}>
            <i className="fa fa-plus" />
          </button>
          <button type="button" className="btn btn-warning" onClick={() => this.add(index + 1, item)}>
            <i className="fa fa-clone" />
          </button>
          <button type="button" className="btn btn-danger" onClick={() => this.remove(index)}>
            <i className="fa fa-trash" />
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    const { cols, legend, showStatus } = this.props;
    return (
      <Grid cols={cols}>
        <fieldset>
          <legend>{legend}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <If test={showStatus}>
                  <th>Status</th>
                </If>
                <th className="table-actions">Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

ItemList.propTypes = {
  cols: PropTypes.string,
  readOnly: PropTypes.bool,
  showStatus: PropTypes.bool,
  list: PropTypes.any,
  field: PropTypes.string.isRequired,
  legend: PropTypes.string.isRequired,
  arrayInsert: PropTypes.func.isRequired,
  arrayRemove: PropTypes.func.isRequired,
};

ItemList.defaultProps = {
  cols: '12',
  readOnly: false,
  showStatus: false,
  list: [],
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(ItemList);
