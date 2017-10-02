import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import {Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
    };

    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path="/" component={App} />
                </ConnectedRouter>
            </Provider>
        );
    }
}
