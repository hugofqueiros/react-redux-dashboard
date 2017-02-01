import actionType from '../actions/actionTypes';
import axios from 'axios';
import Urijs from 'urijs';
import isEmpty from 'lodash/isEmpty';

const URL_ROOT_MEDIUM = 'http://localhost:4040/api/medium';

const fetchMedium = (dispatch) => {
    fetch(dispatch);
    return {
        type: actionType.FETCH_MEDIUM
    }
};

const fetch = (dispatch) => {
    axios({
        method: 'get',
        url: `${URL_ROOT_MEDIUM}`
    }).then(function(result) {
        dispatch(fetchMediumSuccess(result))
    }).catch((e) => {
        dispatch(fetchMediumFailure(e));
    })
};

const fetchMediumSuccess = (result) => {
    return {
        type: actionType.FETCH_MEDIUM_SUCCESS,
        payload: result
    }
};

const fetchMediumFailure = (err) => {
    return {
        type: actionType.FETCH_MEDIUM_FAILURE,
        payload: err
    }
};

export {fetchMedium};

