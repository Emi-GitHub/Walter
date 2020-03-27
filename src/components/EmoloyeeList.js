import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEmployee, setEditMode, updateComponentValue } from '../actions';

class EmoloyeeList extends Component {
    onEditClick = () => {
        this.props.setEditMode(this.props.editMode);
    }
    saveEditMode = (employee, i, value) => {
        console.log('value on clik edit:', value)
        this.props.updateComponentValue(this.props.employees, value, i);
        console.log('poslije',this.props.employees,'value', value, 'i', i)
        this.props.setEditMode(this.props.editMode)
    }
    renderEmployees = (employee, i) => {
        return !this.props.editMode ? 
                    <div className="employee" key={i}>
                        {employee}
                        <div className="ui small buttons two-buttons">
                            <div className="ui button employee-button" onClick={()=>this.onEditClick()}>Izmijeni</div>
                            <div className="ui button employee-button" onClick={()=>this.props.deleteEmployee(this.props.employees, i)}>Obriši</div> 
                        </div>
                        <br/><br/>
                    </div> : 
                    <div className="employee">
                        <div class="ui transparent input">
                            <input type="text" defaultValue={employee} ref="theTextInput" />
                        </div>
                        <div className="ui small buttons two-buttons">
                            <div className="ui button employee-button" onClick={()=>this.saveEditMode(employee, i, this.refs.theTextInput.value)}>Snimi</div>
                            <div className="ui button employee-button" onClick={()=>this.props.setEditMode(this.props.editMode)}>Odbaci</div> 
                        </div>
                        <br/><br/>
                    </div>
    }
    render() {
        const filterEmployees = this.props.employees.filter(employee => {
            return employee.indexOf(this.props.search) !== -1
        })
        console.log('prije',this.props.employees)
        return (
            <div>
                { filterEmployees.map ((employee, i) => {
                    return this.renderEmployees(employee, i);
                })
                }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    employees: state.employees,
    editMode: state.editMode,
    search: state.search
});
export default connect(mapStateToProps, {deleteEmployee, setEditMode, updateComponentValue})(EmoloyeeList);
