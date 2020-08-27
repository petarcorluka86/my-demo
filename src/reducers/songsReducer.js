import * as types from '../actions/actionTypes';

export const songsReducer = (state=[],action) => {
    switch(action.type) {
        case types.SORT_BY_POSITION_ASC:
            return [...state].sort((a,b) => a.position - b.position);
        case types.SORT_BY_POSITION_DESC:
            return [...state].sort((a,b) => b.position - a.position);
        case types.SORT_BY_DURATION_ASC:
            return [...state].sort((a,b) => a.duration - b.duration);
        case types.SORT_BY_DURATION_DESC:
            return [...state].sort((a,b) => b.duration - a.duration);
        case types.INIT_SONGS:
            return action.payload;
        default:
            return state; 
    }
}