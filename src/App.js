import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './containers/list';

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <List />
            </div>
        );
    }
}

export default App;
