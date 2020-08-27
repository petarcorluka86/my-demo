// eslint-disable-next-line
import songData from '../assets/testData/songData';
import store from '../store';
import * as types from './actionTypes';

export const getSongs = async() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.deezer.com/chart";
    const songs = await fetch(proxyurl + url);
    const json = await songs.json();
    return json.tracks.data;
}

export const initSongs = (songs) => store.dispatch({
    type: types.INIT_SONGS,
    payload: songs
});

export const sortSongs = (order) => store.dispatch({
    type: order
});

/*This function should be used ONLY for testing other functionalities in this in this application, it should be
  commented otherwise. It has same effect like PROPER FUNCTION ABOVE, but this one's data is hard coded for testing purposes.
export const getSongs = async() => {
    return songData.tracks.data
};
*/