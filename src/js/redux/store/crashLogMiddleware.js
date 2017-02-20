import Raven from 'raven-js';
import Config from '../../config/config';

Raven.config(Config.sentry.endpoint).install();

export const logger = (store) => next => action => {
    console.log('dispatching: ', action);
    let result = next(action);

    console.log('next state :', store.getState());

    return result;
};

export const crashReporter = (store) => next => action => {
    try {
        return next(action);
    } catch (err) {
        console.error('Caught an exception', err);
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        });
        throw err;
    }
};
