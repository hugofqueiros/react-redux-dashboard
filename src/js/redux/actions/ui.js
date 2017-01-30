import actionType from './actionTypes';

function toogleSidebar() {
    return {
        type: actionType.TOOGLE_SIDEBAR
    };
}

function toogleSearchbar() {
    return {
        type: actionType.TOOGLE_SEARCHBAR
    }
}

function activeSidebarItem(id) {
    return {
        type: actionType.ACTIVE_SIDEBARITEM,
        payload: id
    }
}

export {toogleSidebar, toogleSearchbar, activeSidebarItem}
