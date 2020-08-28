import * as types from './actionTypes'

export function changeView(newView) {
    return async dispatch => {
        try{
            switch(newView) {
                case types.SHOW_LIST:
                    dispatch({type: types.SHOW_LIST});
                    break;
                case types.SHOW_ICONS:
                    dispatch({type: types.SHOW_ICONS});
                    break;
                default:
                    throw Error(`${newView} is not a proper view type.`);
            }
        }
        catch (error) {
            console.log("Error while trying to dispatch in changeView",error);
        }
    }
}