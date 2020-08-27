import {combineReducers} from 'redux';
import {songsReducer} from './songsReducer';
import {viewReducer} from './viewReducer';

export const rootReducer = combineReducers({
    songs: songsReducer,
    show: viewReducer
});