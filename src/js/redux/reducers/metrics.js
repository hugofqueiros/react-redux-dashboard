import actionType from '../actions/actionTypes';
import Config from '../../config/config';

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
        break;
        case actionType.FETCH_METRICS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.payload.data,
                error: null
            }
        }
        break;
        case actionType.FETCH_METRICS_FAILURE: {
            return {
                ...state,
                isFetching: false,
                data: {},
                error: action.payload
            }
        }
        break;
        case actionType.FETCH_METRICS_COMPARE: {
            return {
                ...state,
                isFetchingComp: true
            }
        }
        break;
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
    }

    return state;
}
