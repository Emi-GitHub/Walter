import React, { Component } from 'react';

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
                <div>
                </div>
            </div>
        )
    }
}

export default DailyScrum;
