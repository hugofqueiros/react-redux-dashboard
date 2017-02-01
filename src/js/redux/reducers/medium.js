import actionType from '../actions/actionTypes';

const defaultState = {
    data: {},
    error: null,
    isFetching: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.FETCH_MEDIUM: {
            return {
                ...state,
                isFetching: true
            }

        }
        break;
        case actionType.FETCH_MEDIUM_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.payload.data,
                error: null
            }
        }
        break;
        case actionType.FETCH_MEDIUM_FAILURE: {
            return {
                ...state,
                isFetching: false,
                data: {},
                error: action.payload
            }
        }
    }

    return state;
};
