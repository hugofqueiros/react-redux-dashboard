import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
//import { Provider } from 'react-redux';
//import { Router, browserHistory } from 'react-router';
//import routes from './routes';
import configureStore, { history } from './redux/store/configureStore';
//import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';

import '../styles/style.scss';
//import '../img/*';

const MOUNTNODE = document.getElementById('app');
const store = configureStore();
// Use react-router-redux to
//const history = syncHistoryWithStore(browserHistory, store);

render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>, MOUNTNODE
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={store} history={history} />
            </AppContainer>,
            MOUNTNODE
        );
    });
}
