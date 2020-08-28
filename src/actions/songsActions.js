// eslint-disable-next-line
import songData from '../assets/testData/songData';
import * as types from './actionTypes';

export function initSongs() {
    return async dispatch => {
        try {
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = "https://api.deezer.com/chart";
            const songs = await fetch(proxyurl + url);
            const json = await songs.json();
            dispatch({type: types.INIT_SONGS, payload: json.tracks.data});
        }
        catch (error) {
            console.log("Error in initSongs while trying to fetch and dispatch songs data", error);
            dispatch({type: types.INIT_SONGS, payload: [] });
        }
    }

}

export function sortSongs(order) {
    return async dispatch => {
        try {
            dispatch({type: order});
        }
        catch (error) {
            console.log("Error in sortSongs while trying to dispatch for sort. ", error);
        }
    }
}