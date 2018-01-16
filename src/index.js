import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
var store = createStoreWithMiddleware(reducers);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
