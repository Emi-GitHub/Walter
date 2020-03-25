import React, { Component } from 'react';
import '../style/DailyScrum.css';

class DailyScrum extends Component {
    render() {
        return (
            <div>
                 <div className="search-employee">
                    <div className="ui icon input employee-input">
                        <input type="text" placeholder="Pretraga..."/>
                        <i className="circular search link icon"></i>
                    </div>
                    <button className="ui button">Dodaj</button>
                </div>
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
                            <tr>
                                <td>
                                    <img src="edit-icon.png" alt="edit-icon" className="table-icon edit-icon"/>
                                    <img src="user-icon.png" alt="edit-icon" className="table-icon"/>
                                </td>
                                <td>John Doe</td>
                                <td>9:00</td>
                                <td>Da</td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="edit-icon.png" alt="edit-icon" className="table-icon edit-icon"/>
                                    <img src="user-icon.png" alt="edit-icon" className="table-icon"/>
                                </td>
                                <td>John Doe</td>
                                <td>9:00</td>
                                <td>Da</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>Broj redova: x</div>
                </div>
            </div>
        )
    }
}

export default DailyScrum;
