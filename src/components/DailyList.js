import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUser, setEditDailyMode, updateDailyComponentValue} from '../actions';

class DailyList extends Component {
    onEditClick = () => {
        this.props.setEditDailyMode(this.props.editDailyMode);
    }
    saveEditMode = (dailyee, i, name, time, onTime) => {
        this.props.updateDailyComponentValue(this.props.dailys, i, name, time, onTime);
        this.props.setEditDailyMode(this.props.editDailyMode);
    }
    renderDaily = (el,i) => {
        return !this.props.editDailyMode ? 
            <tr key={i}>
                <td>
                    <img src="edit-icon.png" alt="edit-icon" className="table-icon edit-icon" onClick={()=>this.onEditClick()}/>
                    <img src="user-icon.png" alt="edit-icon" className="table-icon" onClick={()=>this.props.deleteUser(this.props.dailys, i)}/> 
                </td>
                <td>{el.name}</td>
                <td>{el.time}</td>
                <td>{el.onTime}</td>
            </tr> : 
            <tr key={i}>
                <td>
                    <img src="save-icon.png" alt="save-icon" className="table-icon edit-icon" onClick={()=>this.saveEditMode(el, i, this.refs.theNameInput.value, this.refs.theTimeInput.value, this.refs.theOnTimeInput.value)}/>
                    <img src="exit-icon.png" alt="exit-icon" className="table-icon"  onClick={()=>this.props.setEditDailyMode(this.props.editDailyMode)}/> 
                </td>
                <td><div className="ui transparent input icon-input"><input type="text" defaultValue={el.name} ref="theNameInput"/></div></td>
                <td><div className="ui transparent input icon-input"><input type="text" defaultValue={el.time} ref="theTimeInput"/></div></td>
                <td><div className="ui transparent input icon-input"><input type="text" defaultValue={el.onTime} ref="theOnTimeInput"/></div></td>
            </tr>
    }
    render() {
        const filterDailys = this.props.dailys.filter(el => {
            return el.name.indexOf(this.props.dailySearch) !== -1;
        })
        return filterDailys.map ((el, i) => {
            return this.renderDaily(el, i);
        })
    }
}

const mapStateToProps = state => ({
    dailys: state.dailys,
    dailySearch: state.dailySearch,
    editDailyMode: state.editDailyMode
});
export default connect(mapStateToProps, {deleteUser, setEditDailyMode, updateDailyComponentValue})(DailyList);
