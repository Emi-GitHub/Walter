import React, { Component } from 'react';
import { connect } from 'react-redux';

class DailyList extends Component {
    renderDaily = (el,i) => {
        return <tr key={i}>
        <td>
            <img src="edit-icon.png" alt="edit-icon" className="table-icon edit-icon"/>
            <img src="user-icon.png" alt="edit-icon" className="table-icon"/>
        </td>
        <td>{el.name}</td>
        <td>{el.time}</td>
        <td>{el.onTime}</td>
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
});
export default connect(mapStateToProps)(DailyList);
