import actionType from '../actions/actionTypes';
//import Config from '../../config/config';

const defaultState = {
    data: {},
    dataComp: {},
    error: null,
    isFetching: false,
    isFetchingComp: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.FETCH_METRICS: {
            return {
                ...state,
                isFetching: true
            };
        }
        case actionType.FETCH_METRICS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.payload.data,
                error: null
            }
        }
        case actionType.FETCH_METRICS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                data: {},
                error: action.payload
            }
        }
        case actionType.FETCH_METRICS_COMPARE: {
            return {
                ...state,
                isFetchingComp: true
            }
        }
        case actionType.FETCH_METRICS_COMPARE_SUCCESS: {
            return {
                ...state,
                isFetchingComp: false,
                dataComp: action.payload.data
            }
        }
        case actionType.FETCH_METRICS_COMPARE_FAILURE: {
            return {
                ...state,
                isFetchingComp: false,
                error: action.payload
            }
        }
        case actionType.RESET_METRICS: {
            return {
                ...state,
                isFetching: false,
                isFetchingComp: false,
                data: {},
                dataComp: {},
                error: null
            }
        }
    }

    return state;
}
