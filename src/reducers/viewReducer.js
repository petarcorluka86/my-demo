import * as types from '../actions/actionTypes';

const viewInit = {
    loading: true,
    list: false,
    icons: false
}

export const viewReducer = (state = viewInit, action) => {
    switch(action.type) {
        case types.SHOW_LOADING:
            return {loading: true, list: false, icons: false};
        case types.SHOW_LIST:
            return {loading: false, list: true, icons: false};
        case types.SHOW_ICONS:
            return {loading: false, list: false, icons: true};
        default:
            return state; 
    }
}