import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeList from './EmoloyeeList';
import { setContent, addEmployees, refreshContent, setSearch } from '../actions';
import '../style/ListaRadnika.css';

class ListaRadnika extends Component {
    onFormSubmit = event => {
        event.preventDefault();
        this.props.addEmployees(this.props.employees, this.props.content);
        this.props.refreshContent();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="search-employee">
                        <div className="ui icon input employee-input">
                            <input type="text" placeholder="Pretraga..." onChange={event=>this.props.setSearch(event.target.value)}/>
                            <i className="circular search link icon"></i>
                        </div>
                        <div className="ui left icon input employee-input">
                            <input 
                                type="text" 
                                placeholder="Add employee..."
                                value={this.props.content}
                                onChange={(event)=>this.props.setContent(event.target.value)}
                                required
                            />
                            <i className="users icon"></i>
                        </div>
                        <button className="ui button">Dodaj</button>
                    </div>
                </form>
                <div className="employee-parent">
                    <div className="ui segment my-segment">
                        <EmployeeList />
                    </div>
                    <div>Ukupno uposlenih: {this.props.employees.length}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    employees: state.employees,
    content: state.content
});
export default connect(mapStateToProps, {setContent, addEmployees, refreshContent, setSearch})(ListaRadnika);
