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
