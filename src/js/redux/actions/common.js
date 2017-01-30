import actionType from './actionTypes';

function appLoaded() {
    return {
        type: actionType.APP_LOADED
    };
}

export {appLoaded};
