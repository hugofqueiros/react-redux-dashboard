import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './redux/store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

import '../styles/style.scss';

const MOUNTNODE = document.getElementById('app');
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, MOUNTNODE
);
