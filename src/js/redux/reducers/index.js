import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common';
import auth from './auth';
import ui from './ui';
import user from './user';
import metrics from './metrics';

export default combineReducers({
    routing: routerReducer,
    common,
    ui,
    user,
    auth,
    metrics
});
