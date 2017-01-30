import actionType from '../actions/actionTypes';
import axios from 'axios';
import Urijs from 'urijs';
import isEmpty from 'lodash/isEmpty';

const URL_ROOT_METRICS = 'http://localhost:4040/api/metrics';

function buildUrl(metrics) {
    let uriBuild = new Urijs(URL_ROOT_METRICS);
    uriBuild.search({
        metrics: !isEmpty(metrics) ? metrics.join(',') : ''
    });
    return uriBuild.toString();
}

function fetchMetrics(dispatch, metrics = []) {
    const url = buildUrl(metrics);
    fetch(dispatch, url);
    return {
        type: actionType.FETCH_METRICS
    }
}

function fetchMetricsCompare(dispatch, metrics = []) {
    const url = buildUrl(metrics);
    fetchComp(dispatch, url);
    return {
        type: actionType.FETCH_METRICS_COMPARE
    }
}

function fetchComp(dispatch, url) {
    axios({
        method: 'get',
        url: `${url}`
    }).then(function(result) {
        dispatch(fetchMetricsCompareSuccess(result))
    }).catch(function(error) {
        dispatch(fetchMetricsCompareFailure(error))
    });
}

function fetch(dispatch, url) {
    axios({
        method: 'get',
        url: `${url}`
    }).then(function(result) {
        dispatch(fetchMetricsSuccess(result))
    }).catch(function(error) {
        dispatch(fetchMetricsFailure(error))
    });
}

function fetchMetricsSuccess(result) {
    return {
        type: actionType.FETCH_METRICS_SUCCESS,
        payload: result
    }
}

function fetchMetricsFailure(err) {
    return {
        type: actionType.FETCH_METRICS_FAILURE,
        payload: err
    }
}

function fetchMetricsCompareSuccess(result) {
    return {
        type: actionType.FETCH_METRICS_COMPARE_SUCCESS,
        payload: result
    }
}

function fetchMetricsCompareFailure(err) {
    return {
        type: actionType.FETCH_METRICS_COMPARE_FAILURE,
        payload: err
    }
}

export {fetchMetrics, fetchMetricsCompare};
