import {store} from '../routes';
import * as types from './actionTypes'

export const showList = () => {
    try {
        store.dispatch({type: types.SHOW_LIST});
    }
    catch (error) {
        console.log("Error in showList while trying to dispatch new show object", error);
    }
}

export const showIcons = () => {
    try {
        store.dispatch({type: types.SHOW_ICONS});
    }
    catch (error) {
        console.log("Error in showList while trying to dispatch new show object", error);
    }
}