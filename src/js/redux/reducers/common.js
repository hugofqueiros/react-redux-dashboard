import actionType from '../actions/actionTypes';

const defaultState = {
    appLoaded: false,
    isFetching: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.APP_LOADED:
            return {
                ...state,
                appLoaded: true
            };
    }

    return state;
};
