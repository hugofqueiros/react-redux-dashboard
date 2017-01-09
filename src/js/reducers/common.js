import actionType from '../constants/actionTypes';

const defaultState = {
    appName: 'React Redux Dashboard',
    viewChangeCounter: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.APP_LOADED:
            return {
                ...state,
                appLoaded: true
            };
        case actionType.EXPAND_SIDEBAR:
            return {
                ...state
            };
        case actionType.CLOSE_SIDEBAR:
            return {
                ...state
            };
    }

    return state;
};
