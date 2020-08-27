import React, { useState } from 'react';
import './ListMode.css';
import SongInfo  from './SongInfo';

export default function ListMode(props) {
    const [msg, setMsg] = useState(true);
    const songsList = props.songs.map(song =>
            <li key={song.id}><button 
                    className="song-list-item" 
                    onMouseOver={()=> props.songHovered(song)}
                    onMouseLeave={()=> props.setInfo(false)}
                    onClick={()=>window.open(props.theSong.preview,'popUpWindow','height=200,width=400,top=10,left=550')}>
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
                    {props.showInfo && <div className="picture-frame"
                    style={{
                        background: "url("+props.theSong.cover+")",
                        backgroundSize: "cover"
                    }}></div>}
                    {props.showInfo && <SongInfo song={props.theSong} />}
                </div>
            </div>
        </div>
    );
}