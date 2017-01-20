import actionType from './actionTypes';

export function toogleSidebar() {
    return {
        type: actionType.TOOGLE_SIDEBAR
    };
}

export function toogleSearchbar() {
    return {
        type: actionType.TOOGLE_SEARCHBAR
    }
}

export function activeSidebarItem(id) {
    return {
        type: actionType.ACTIVE_SIDEBARITEM, id
    }
}
