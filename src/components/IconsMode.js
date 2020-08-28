import React from 'react';
import styles from '../css/IconsMode.module.css';
import SongInfo from './SongInfo';

export default function IconsMode(props) {

    const songsList = props.songs.map(song =>
        <button 
            className={styles.songIcon}
            key={song.id} 
            style={{
                background: "url("+song.artist.picture_big+")", 
                backgroundSize: "cover",
                fontSize: "1em",
            }}
            onMouseOver={()=> props.songHovered(song)}
            onMouseLeave={()=> props.setInfo(false)}
            onClick={()=>window.open(props.theSong.preview,'popUpWindow','height=200,width=400,top=10,left=550')}> 
            <span className={styles.songTitle}>{song.title}</span> 
        </button>
        );

    return(
        <div>
            <div className={styles.iconsContainer}>{songsList}</div>
            <div className={styles.welcomeIcons}>Deezer's <br/> TOP 10</div>
            {props.showInfo && <SongInfo song={props.theSong} />}
        </div>
    );

}