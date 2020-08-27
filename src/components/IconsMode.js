import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './IconsMode.css';
import SongInfo from './SongInfo';

export default function IconsMode () {
    
    const songs = useSelector(state => state.songs);
    const [showInfo, setInfo] = useState(0);
    const [thesong, setSong] = useState({
        position: undefined,
        title: undefined,
        artist: undefined,
        duration: undefined
    });

    const iconHovered = song => {
        setInfo(true);
        setSong({
            position: song.position,
            title: song.title,
            album: song.album.title,
            artist: song.artist.name,
            duration: song.duration,
            preview: song.preview
        });
    }

    const songsList = songs.map(song =>
        <button 
            className="song-icon" 
            key={song.id} 
            style={{
                background: "url("+song.artist.picture_big+")", 
                backgroundSize: "cover",
                fontSize: "1em",
            }}
            onMouseOver={()=>iconHovered(song)}
            onMouseLeave={()=>setInfo(false)}
            onClick={()=>window.open(thesong.preview,'popUpWindow','height=200,width=400,top=10,left=550')}> 
            <span className="song-title">{song.title}</span> 
        </button>
        );

    return(
        <div>
            <div className="icons-container">{songsList}</div>
            <div className="welcome-icons">Deezer's <br/> TOP 10</div>
            {showInfo && <SongInfo song={thesong} />}
        </div>
    );

}