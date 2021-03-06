import actionType from '../actions/actionTypes';

const defaultState = {
    data: {},
    error: null,
    isFetching: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.FETCH_USER:
            return {
                ...state,
                isFetching: true
            };
        case actionType.FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.data,
                error: null
            };
        case actionType.FETCH_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                data: {},
                error: action.payload.message
            };
    }

    return state;
};
