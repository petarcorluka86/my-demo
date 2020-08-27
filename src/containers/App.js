import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import IconsMode from '../components/IconsMode';
import ListMode from '../components/ListMode';
import Footer from '../components/Footer';
import * as actions from '../actions';
import './App.css';

export default function App() {
    const songs = useSelector(state => state.songs);
    const show = useSelector(state => state.show);
    const [showInfo, setInfo] = useState(false);
    const [theSong, setSong] = useState({
      position: undefined,
      title: undefined,
      artist: undefined,
      duration: undefined,
      preview: undefined,
      cover: undefined
    });

    useEffect(() => { actions.songs.getSongs().then(response => actions.songs.initSongs(response)) },[]);
    useEffect(() => {if(songs.length > 0 && show.loading) actions.view.showList()},[songs, show.loading]);

    const songHovered = (song) => {
      setInfo(true);
      setSong({
          position: song.position,
          title: song.title,
          album: song.album.title,
          artist: song.artist.name,
          duration: song.duration,
          preview: song.preview,
          cover: song.artist.picture_big
      });
    }

    return(
      <div>
        <Navbar />
        <div className="nav-escape">
          {show.loading && <Loading />}
          {show.icons && <IconsMode songs={songs} showInfo={showInfo} theSong={theSong} songHovered={songHovered} setInfo={(bool)=>setInfo(bool)}/>}
          {show.list  && <ListMode  songs={songs} showInfo={showInfo} theSong={theSong} songHovered={songHovered} setInfo={(bool)=>setInfo(bool)}/>}
        </div>
        <Footer />
      </div>
    )
}