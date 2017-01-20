import actionType from '../actions/actionTypes';

const defaultState = {
    sidebarOpen: true,
    searchBarOpen: false,
    activeSidebarItem: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
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

        case actionType.ACTIVE_SIDEBARITEM:
            return {
                ...state,
                activeSidebarItem: action.id
            };
            break;
        // default:
        //     return state;
    }

    return state;
};
