import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, setTime, setDailySearch } from '../actions';
import DailyList from './DailyList';
import '../style/DailyScrum.css';

class DailyScrum extends Component {
    render() {
        return (
            <div>
                <div className="search-employee">
                        <div className="ui icon input employee-input">
                            <input type="text" placeholder="Pretraga..." onChange={event=>this.props.setDailySearch(event.target.value)}/>
                            <i className="circular search link icon"></i>
                        </div>
                </div>
                <form onSubmit={this.onFormSubmit}>
                    <div className="search-employee">
                        <div className="ui left icon input employee-input">
                            <input 
                                type="text" 
                                placeholder="Add employee..."
                                value={this.props.name}
                                onChange={(event)=>this.props.setName(event.target.value)}
                            />
                            <i className="users icon"></i>
                        </div>
                        <button className="ui button">Dodaj</button>
                    </div>
                </form>
                <form onSubmit={this.onFormSubmit}>
                    <div className="search-employee">
                        <div className="ui left icon input employee-input">
                            <input 
                                type="text" 
                                placeholder="Add time..."
                                value={this.props.time}
                                onChange={(event)=>this.props.setTime(event.target.value)}
                            />
                            <i className="clock icon"></i>
                        </div>
                        <button className="ui button">Dodaj</button>
                    </div>
                </form>
                <div className="employe-table">
                    <table className="ui celled table">
                        <thead>
                            <tr className="table-name">
                                <th></th>
                                <th>Ime uposlenika</th>
                                <th>Vrijeme dolaska</th>
                                <th>Stigao na vrijeme</th>
                            </tr>
                        </thead>
                        <tbody>
                            <DailyList />
                        </tbody>
                    </table>
                    <div>Broj redova: {this.props.dailys.length}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    dailys: state.dailys,
    name: state.name,
    time: state.time
});
export default connect(mapStateToProps, {setName, setTime, setDailySearch})(DailyScrum);