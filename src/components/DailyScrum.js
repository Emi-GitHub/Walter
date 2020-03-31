import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, setTime, setDailySearch, addDailys, refreshName, refreshTime, setOnTime, setMess, setTimeMess, setNewDailys} from '../actions';
import DailyList from './DailyList';
import '../style/DailyScrum.css';

class DailyScrum extends Component {
    componentWillMount() {
        this.props.setNewDailys(JSON.parse(localStorage.getItem("somethingDaily")))
      }
    onTimeFunction = () => {
        var hours = this.props.time.split(":")[0];
        var minutes = this.props.time.split(":")[1];
        if((parseInt(hours)===8 && parseInt(minutes)>45) || (parseInt(hours)>8)) this.props.setOnTime('NE'); 
        else this.props.setOnTime('DA'); 
    }
    validateTime = () => {
        var exist = true;
        var timeFormat = /^([0-9]{2}):([0-9]{2})$/;
        if(!timeFormat.test(this.props.time)) { exist= false; this.props.setTimeMess(true)}
        else  this.props.setTimeMess(false)
        return exist;
    }
    validationName = () => {
        var exist = false;
        this.props.employees.map(el => {
            if(el === this.props.name) exist=true;
            return null;
        })
        if(exist === false) this.props.setMess(false);
        return exist;
    }
    onFormSubmit = event => {
        event.preventDefault();
        if ((this.validationName()===false && this.validateTime()===false) || (this.validationName()===false) || (this.validateTime()===false)){console.log("not correct")}
        else  {
            this.props.addDailys(this.props.dailys, this.props.name, this.props.time, this.props.onTime);
            //localStorage.setItem('somethingDaily', JSON.stringify(this.props.dailys))
        }
        this.props.refreshName();
        this.props.refreshTime();
    }
    notExistMessage = () => {
        return (
            <div className="ui negative message negative-mess">
                <i className="close icon"></i>
                <div className="header">
                    We're sorry we cannot add this emoloyee
                </div>
                <p>This employee does not exist in the table "Lista radnika"</p>
            </div>
        )
    }
    showTimeError = () => {
        return (
            <div className="ui negative message negative-mess">
                <i className="close icon"></i>
                <div className="header">
                    We're sorry we cannot add this emoloyee
                </div>
                <p>Time must have format _ _ : _ _</p>
            </div>
        )
    }
    render() {
        localStorage.setItem('somethingDaily', JSON.stringify(this.props.dailys))
        this.onTimeFunction();
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
                                onChange={(event)=>{this.props.setName(event.target.value); this.props.setMess(true); this.props.setTimeMess(false)}}
                                required
                            />
                            <i className="users icon"></i>
                        </div>
                        <div className="ui left icon input employee-input time">
                            <input 
                                type="text" 
                                placeholder="_ _ : _ _"
                                value={this.props.time}
                                onChange={(event) =>{this.props.setTime(event.target.value); this.props.setTimeMess(false)}}
                                required
                            />
                            <i className="clock icon"></i>
                        </div>
                        <button className="ui button add">Dodaj</button>
                    </div>
                    {this.props.mess===false ? this.notExistMessage() : null}
                    {this.props.timeMess===true ? this.showTimeError() : null}
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
    employees: state.employees,
    dailys: state.dailys,
    name: state.name,
    time: state.time,
    onTime: state.onTime,
    mess: state.mess,
    timeMess: state.timeMess
});
export default connect(mapStateToProps, {setName, setTime, setDailySearch, addDailys, refreshName, refreshTime, setOnTime, setMess, setTimeMess, setNewDailys})(DailyScrum);