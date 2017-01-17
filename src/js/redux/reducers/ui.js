import actionType from '../actions/actionTypes';

const defaultState = {
    sidebarOpen: true,
    searchBarOpen: false
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.TOOGLE_SIDEBAR:
            console.warn('wowoowowow');
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
        // default:
        //     return state;
    }

    return state;
};
