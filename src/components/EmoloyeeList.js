import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEmployee, updateComponentValue, setMode } from "../actions";

class EmoloyeeList extends Component {
  onEditClick = (i) => {
    this.props.setMode(i);
  };
  saveEditMode = (employee, i, value) => {
    this.props.updateComponentValue(this.props.employees, value, i);
    this.props.setMode(false);
  };
  showEdit = (employee, i) => {
    return (
      <div className="employee">
        <div className="ui transparent input">
          <input type="text" defaultValue={employee} ref="theTextInput" />
        </div>
        <div className="ui small buttons two-buttons">
          <div
            className="ui button employee-button"
            onClick={() =>
              this.saveEditMode(employee, i, this.refs.theTextInput.value)
            }
          >
            Snimi
          </div>
          <div
            className="ui button employee-button"
            onClick={() => this.props.setMode(false)}
          >
            Odbaci
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  };
  renderEmployees = (employee, i) => {
    return i === this.props.mode ? (
      this.showEdit(employee, i)
    ) : (
      <div className="employee" key={i}>
        <p className="employee-p">{employee}</p>
        <div className="ui small buttons two-buttons">
          <div
            className="ui button employee-button"
            onClick={() => this.onEditClick(i)}
          >
            Izmijeni
          </div>
          <div
            className="ui button employee-button"
            onClick={() => this.props.deleteEmployee(this.props.employees, i)}
          >
            Obriši
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  };
  render() {
    if (this.props.employees.length === 0)
      return <div>Lista radnika je prazna!</div>;
    else if (this.props.employees.length !== 0) {
      const filterEmployees = this.props.employees.filter((employee) => {
        return (
          employee.toUpperCase().indexOf(this.props.search.toUpperCase()) !== -1
        );
      });
      return (
        <div>
          {filterEmployees.map((employee, i) => {
            return this.renderEmployees(employee, i);
          })}
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  employees: state.employees,
  search: state.search,
  mode: state.mode,
});
export default connect(mapStateToProps, {
  deleteEmployee,
  updateComponentValue,
  setMode,
})(EmoloyeeList);
