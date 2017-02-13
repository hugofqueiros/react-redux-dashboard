import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import ravenMiddleware from 'redux-raven-middleware';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import DevTools from '../../containers/DevTools';
import { loadState, saveState } from '../../utils/localStorage'
import throttle from 'lodash/throttle';
import config from '../../config/config';

//import {crashReporter} from './crashLogMiddleware';

const logger = createLogger();

const configureStoreProd = (initialState) => {
    console.warn('Configure Store Production');

    const middlewares = [
        ravenMiddleware(config.sentry.endpoint),
        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
        thunk,
    ];

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
        )
    );
};

const configureStoreDev = (initialState) => {
    const middlewares = [
        //crashReporter,
        //ravenMiddleware(config.sentry.endpoint),
        //logger,
        reduxImmutableStateInvariant(),
        thunk,
    ];

    // TODO: add persistent state to the createStore
    const persistentState = loadState();

    console.log('INITIAL STATE AND PERSISTENT', initialState, persistentState);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares),
        )
    );

    // const store = createStore(rootReducer, initialState, compose(
    //     applyMiddleware(...middlewares),
    //     //DevTools.instrument()
    //     )
    // );

    store.subscribe(throttle(() => {
        saveState(store.getState());
    }, 1000));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = rootReducer;
            store.replaceReducer(nextReducer);
        });
    }

    return store;
};

const configureStore = process.env.NODE_ENV === 'production' ?
    configureStoreProd : configureStoreDev;

export default configureStore;
