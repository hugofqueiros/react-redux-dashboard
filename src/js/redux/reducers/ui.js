import actionType from '../actions/actionTypes';
import Config from '../../config/config';

const defaultState = {
    sidebarOpen: (!Config.isMobileDevice), //|| window.matchMedia("(min-width: 1024px)").matches),
    activeSidebarItem: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.TOOGLE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: !state.sidebarOpen
            };
        case actionType.ACTIVE_SIDEBARITEM:
            return {
                ...state,
                activeSidebarItem: action.payload
            };
    }

    return state;
};
