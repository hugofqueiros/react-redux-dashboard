import axios from 'axios';
import actionType from './actionTypes';

const URL_ROOT_USER = 'https://api.github.com/users/hugofqueiros';

function fetchUser(dispatch) {
    fetch(dispatch);
    return {
        type: actionType.FETCH_USER
    }
}

function fetch(dispatch) {
    axios({
        method: 'get',
        url: `${URL_ROOT_USER}`
    }).then(function(result) {
        dispatch(fetchUserSuccess(result));
    }).catch(function(error) {
        dispatch(fetchUserFailure(error))
    });
}

function fetchUserSuccess(result) {
    return {
        type: actionType.FETCH_USER_SUCCESS,
        payload: result
    }
}

function fetchUserFailure(err) {
    return {
        type: actionType.FETCH_USER_FAILURE,
        payload: err
    }
}

export {fetchUser};


