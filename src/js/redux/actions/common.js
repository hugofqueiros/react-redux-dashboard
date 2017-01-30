import actionType from './actionTypes';

export function appLoaded() {
    console.log('ACTION APPLOADED');

    return {
        type: actionType.APP_LOADED
    };
}
