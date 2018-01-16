import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftList from './containers/left_list';
import RightList from './containers/right_list';
import TransButtons from './containers/trans_buttons'

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <div className="list-table col-md-4 col-md-offset-1" id="left-table">
                    <LeftList />
                </div>
                <div className="col-md-2 list-table-tools text-center" role="group">
                    <TransButtons />
                </div>
                <div className="list-table" id="right-table">
                </div>
                <div className="list-table col-md-4" id="left-table">
                    <RightList />
                </div>
            </div>
        );
    }
}

export default App;
