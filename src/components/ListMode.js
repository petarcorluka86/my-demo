import React, { useState } from 'react';
import Media from 'react-media';
import styles from '../css/ListMode.module.css';
import SongInfo  from './SongInfo';

export default function ListMode(props) {
    const [msg, setMsg] = useState(true);
    const songsList = props.songs.map(song =>
            <li key={song.id}><button 
                    className={styles.songListItem} 
                    onMouseOver={()=> props.songHovered(song)}
                    onMouseLeave={()=> props.setInfo(false)}
                    onClick={()=>window.open(props.theSong.preview,'popUpWindow','height=200,width=400,top=10,left=550')}>
                    {song.title}
                </button>
                <Media query="(max-width: 900px)">{song.title === props.theSong.title && props.showInfo && <SongInfo song={props.theSong} />}</Media>
            </li>
        );

    return(
        <div className ={styles.content}>
            <div className={styles.leftContentContainer}>
                <ul onMouseOver={() => setMsg(false)}
                    onMouseLeave={() => setMsg(true)}>
                    {songsList}
                </ul>
            </div>
            <div className={styles.rightContentContainer}>
                <div className={styles.listSongInfo}>
                    {msg && <div className={styles.welcomeList}>Deezer's <br/> TOP 10</div>}
                    {props.showInfo && <div className={styles.pictureFrame}
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