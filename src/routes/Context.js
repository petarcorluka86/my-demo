import React, {useEffect} from 'react';
import {store} from './';
import * as actions from '../actions'

export const context = React.createContext();

export default function ContextProvider(props) {
    const songs = store.getState().songs;
    const show = store.getState().show;

    useEffect(() => { actions.songs.getSongs().then(response => actions.songs.initSongs(response)) },[]);
    useEffect(() => {if(songs.length > 0 && show.loading) actions.view.showList()},[songs, show.loading])

    return(
        <context.Provider value = {{
            songs: songs,
            show: show,
            actions:{
                changeView: actions.view.changeView,
                handleSort: actions.songs.sortSongs                                                             
            }
        }}>
            {props.children}
        </context.Provider>
    );
}