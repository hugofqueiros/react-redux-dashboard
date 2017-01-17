import actionType from '../actions/actionTypes';

const defaultState = {
    appName: 'React Redux Dashboard',
    appLoaded: false,
    sidebarOpen: true,
    // searchBarOpen: false,
    viewChangeCounter: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.APP_LOADED:
            return {
                ...state,
                appLoaded: true
            };
            break;
        case actionType.TOOGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: !state.sidebarOpen
            };
            break;
        case actionType.TOOGLE_SEARCHBAR:
            return {
                ...state,
                searchBarOpen: !state.searchBarOpen
            };
            break;
        default:
            return state;
    }

    return state;
};
