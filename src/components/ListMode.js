import React, {useState, useContext} from 'react';
import {context} from '../routes/Context';
import './ListMode.css';
import SongInfo  from './SongInfo';

export default function ListMode() {
    const {songs} = useContext(context);
    const [msg, setMsg] = useState(true);
    const [showInfo, setInfo] = useState(false);
    const [thesong, setSong] = useState({
        position: undefined,
        title: undefined,
        artist: undefined,
        duration: undefined,
        preview: undefined,
        cover: undefined
    });

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

    const songsList = songs.map(song =>
            <li key={song.id}><button 
                    className="song-list-item" 
                    onMouseOver={()=> songHovered(song)}
                    onMouseLeave={()=> setInfo(false)}
                    onClick={()=>window.open(thesong.preview,'popUpWindow','height=200,width=400,top=10,left=550')}>
                    {song.title}
                </button>
            </li>
        );

    return(
        <div className ="content">
            <div className="left-content-container">
                <ul onMouseOver={() => setMsg(false)}
                    onMouseLeave={() => setMsg(true)}>
                    {songsList}
                </ul>
            </div>
            <div className="right-content-container">
                <div className="list-song-info">
                    {msg && <div className="welcome-list">Deezer's <br/> TOP 10</div>}
                    {showInfo && <div className="picture-frame"
                    style={{
                        background: "url("+thesong.cover+")",
                        backgroundSize: "cover"
                    }}></div>}
                    {showInfo && <SongInfo song={thesong} />}
                </div>
            </div>
        </div>
    );
}