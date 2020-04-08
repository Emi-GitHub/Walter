import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteUser,
  updateDailyComponentValue,
  setDailyMode,
} from "../actions";

class DailyList extends Component {
  onEditClick = (i) => {
    this.props.setDailyMode(i);
  };
  saveEditMode = (dailyee, i, name, time, onTime) => {
    this.props.updateDailyComponentValue(
      this.props.dailys,
      i,
      name,
      time,
      onTime
    );
    this.props.setDailyMode(false);
  };
  showEdit = (el, i) => {
    return (
      <tr key={i}>
        <td className="edit-mode first-column">
          <img
            src="save-icon.png"
            alt="save-icon"
            className="table-icon edit-icon"
            onClick={() =>
              this.saveEditMode(
                el,
                i,
                this.refs.name.value,
                this.refs.time.value,
                this.refs.onTime.value
              )
            }
          />
          <img
            src="exit-icon.png"
            alt="exit-icon"
            className="table-icon"
            onClick={() => this.props.setDailyMode(false)}
          />
        </td>
        <td className="edit-mode">
          <div className="ui input icon-input">
            <input
              type="text"
              defaultValue={el.name}
              ref="name"
              autofocus="true"
              className="edit-focus"
            />
          </div>
        </td>
        <td className="edit-mode">
          <div className="ui transparent input icon-input-time">
            <input
              type="text"
              defaultValue={el.time}
              ref="time"
              autofocus="true"
              className="edit-focus"
            />
          </div>
        </td>
        <td className="edit-mode">
          <div className="ui transparent input icon-input-time">
            <input
              type="text"
              defaultValue={el.onTime}
              ref="onTime"
              autofocus="true"
              className="edit-focus"
            />
          </div>
        </td>
      </tr>
    );
  };
  renderDaily = (el, i) => {
    return i === this.props.dailyMode ? (
      this.showEdit(el, i)
    ) : (
      <tr key={i}>
        <td className="first-column table-height">
          <img
            src="edit-icon.png"
            alt="edit-icon"
            className="table-icon edit-icon"
            onClick={() => this.onEditClick(i)}
          />
          <img
            src="user-icon.png"
            alt="edit-icon"
            className="table-icon"
            onClick={() => this.props.deleteUser(this.props.dailys, i)}
          />
        </td>
        <td>{el.name}</td>
        <td>{el.time}</td>
        <td>{el.onTime}</td>
        {/*<td>
          <div className="ui disabled input ">
            <input
              type="text"
              defaultValue={el.name}
              style={{ border: "0px", fontWeight: "bold", color: "black" }}
            />
          </div>
        </td>
        <td>
          <div className="ui disabled input ">
            <input type="text" defaultValue={el.time} />
          </div>
        </td>
        <td>
          <div className="ui disabled input ">
            <input type="text" defaultValue={el.onTime} />
          </div>
        </td>*/}
      </tr>
    );
  };
  render() {
    if (this.props.dailys.length === 0)
      return <div>Lista radnika je prazna!</div>;
    else if (this.props.dailys.length !== 0) {
      const filterDailys = this.props.dailys.filter((el) => {
        return (
          el.name
            .toUpperCase()
            .indexOf(this.props.dailySearch.toUpperCase()) !== -1
        );
      });
      return filterDailys.map((el, i) => {
        return this.renderDaily(el, i);
      });
    }
  }
}

const mapStateToProps = (state) => ({
  dailys: state.dailys,
  dailySearch: state.dailySearch,
  dailyMode: state.dailyMode,
  employees: state.employees,
});
export default connect(mapStateToProps, {
  deleteUser,
  updateDailyComponentValue,
  setDailyMode,
})(DailyList);
