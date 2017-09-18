import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './redux/store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';

import '../styles/style.scss';
//import '../img/*';

const MOUNTNODE = document.getElementById('app');
const store = configureStore();
// Use react-router-redux to
const history = syncHistoryWithStore(browserHistory, store);

const A = [1, [2, [3, [4]], 5], [1, [2, [1, [2, [3, [4]], 5]], [3, [4]], 5]]];

/**
 * @private
 * @param {Array} array
 * @param {Array} result
 * @returns {Array}
 */
function _flattenArray(array, result = []) {
    if (array === null) {
        return result;
    }

    for (const value of array) {
        if (Array.isArray(value)) {
            _flattenArray(value, result);
        } else {
            result[result.length] = value;
        }
    }

    return result;
}

/**
 * Recursively flattens arrays of arbitrarity nested arrays of integers into a flat array of integers.
 *
 * @param {Array} array to flatten
 * @returns {Array} returns the flattened array
 * @example
 *
 * flatten([[1, 2, [3]], 4])
 * // => [1, 2, 3, 4]
 */
function flatten(array) {
    const length = (array === null) ? 0 : array.length;
    return length ? _flattenArray(array) : [];
}

console.log('flattened: ',  flatten(A));

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, MOUNTNODE
);
