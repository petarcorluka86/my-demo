import {store} from '../routes';
import * as types from './actionTypes'

export const showList = () => store.dispatch({type: types.SHOW_LIST});
export const showIcons = () => store.dispatch({type: types.SHOW_ICONS});

export const changeView = (viewMode) => viewMode === types.SHOW_LIST ? showList() : showIcons();