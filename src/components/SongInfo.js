import React from 'react';
import styles from './SongInfo.module.css';

export default function SongInfo(props) {
    return (
        <div className={styles.myModal}>
            <div className={styles.modalTitle}>SONG DETAILS</div>
            <div className = {styles.modalText}>
                <div>Position: {props.song.position} </div>
                <div>Title: {props.song.title}</div>
                <div>Album: {props.song.album}</div>
                <div>Artist: {props.song.artist}</div>
                <div>Duration: {("0"+Math.floor(props.song.duration / 60)).slice(-2)} :{("0" + props.song.duration % 60).slice(-2)}</div>
            </div>
        </div>
    );
}