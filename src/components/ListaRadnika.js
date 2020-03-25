import React, { Component } from 'react';
import '../style/ListaRadnika.css';

class ListaRadnika extends Component {
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
                <div className="employee-parent">
                    <div className="ui segment my-segment">
                        <div className="employee">
                            Uposlenik x
                            <div className="ui small buttons two-buttons">
                                <div className="ui button employee-button">Izmijeni</div>
                                <div className="ui button employee-button">Obriši</div>
                            </div>
                            <br/> <br/>
                        </div>
                        <div className="employee">
                            Uposlenik x
                            <div className="ui small buttons two-buttons">
                                <div className="ui button employee-button">Izmijeni</div>
                                <div className="ui button employee-button">Obriši</div>
                            </div>
                            <br/> <br/>
                        </div>
                    </div>
                    <div>Ukupno uposlenih: x</div>
                </div>
            </div>
        )
    }
}

export default ListaRadnika;
