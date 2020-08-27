// eslint-disable-next-line
import songData from '../assets/testData/songData';
import {store}  from '../routes';
import * as types from './actionTypes';

export const getSongs = async() => {
    try {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://api.deezer.com/chart";
        const songs = await fetch(proxyurl + url);
        const json = await songs.json();
        return json.tracks.data;
    }
    catch (error) {
        console.log("Error with fetching data from Deezer API servers. ", error);
        return [];
    }
}

export const initSongs = (songs) => {
    try {
        store.dispatch({type: types.INIT_SONGS, payload: songs});
    }
    catch (error) {
        console.log("Error in initSongs while trying to dispatch fetched songs", error);
    }
}

export const sortSongs = (order) => {
    try {
        store.dispatch({ type: order});
    }
    catch (error) {
        console.log("Error in sortSongs while trying to dispatch for sort. ", error);
    }
}

/*This function should be used ONLY for testing other functionalities in this in this application, it should be
  commented otherwise. It has same effect like PROPER FUNCTION ABOVE with the same name, but this one's data is hard coded for testing purposes.
export const getSongs = async() => {
    return songData.tracks.data
};
*/