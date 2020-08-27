import React from 'react';
import './SongInfo.css';

export default function SongInfo(props) {
    return (
        <div className="my-modal">
            <div className="modal-title">SONG DETAILS</div>
            <div className = "modal-text container">
                <div>Position: {props.song.position} </div>
                <div>Title: {props.song.title}</div>
                <div>Album: {props.song.album}</div>
                <div>Artist: {props.song.artist}</div>
                <div>Duration: {("0"+Math.floor(props.song.duration / 60)).slice(-2)} :{("0" + props.song.duration % 60).slice(-2)}</div>
            </div>
        </div>
    );
}