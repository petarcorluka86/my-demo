import React from 'react';
import './IconsMode.css';
import SongInfo from './SongInfo';

export default function IconsMode(props) {

    const songsList = props.songs.map(song =>
        <button 
            className="song-icon" 
            key={song.id} 
            style={{
                background: "url("+song.artist.picture_big+")", 
                backgroundSize: "cover",
                fontSize: "1em",
            }}
            onMouseOver={()=> props.songHovered(song)}
            onMouseLeave={()=> props.setInfo(false)}
            onClick={()=>window.open(props.theSong.preview,'popUpWindow','height=200,width=400,top=10,left=550')}> 
            <span className="song-title">{song.title}</span> 
        </button>
        );

    return(
        <div>
            <div className="icons-container">{songsList}</div>
            <div className="welcome-icons">Deezer's <br/> TOP 10</div>
            {props.showInfo && <SongInfo song={props.theSong} />}
        </div>
    );

}