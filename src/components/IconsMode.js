import React, {useState, useContext} from 'react'
import {context} from '../Context'
import '../styles/IconsMode.css'
import SongInfo from './SongInfo'

//sve skoro isto kao u ListMode samo drugačije prikazano i raspoređeno
export default function IconsMode () {
    const {songs} = useContext(context);
    const [showInfo, setInfo] = useState(0);
    const [thesong, setSong] = useState({
        position: undefined,
        title: undefined,
        artist: undefined,
        duration: undefined
    });
    const songsList = songs.map(song =>
        <button 
            className="song-icon" 
            key={song.id} 
            style={{
                background: "url("+song.artist.picture_big+")", 
                backgroundSize: "cover",
                fontSize: "1em",
            }
            }
            onMouseOver={()=>{
                setInfo(true);
                setSong({
                    position: song.position,
                    title: song.title,
                    album: song.album.title,
                    artist: song.artist.name,
                    duration: song.duration,
                    preview: song.preview
                });
            }}
            onMouseLeave={()=>setInfo(false)}
            onClick={()=>window.open(thesong.preview,'popUpWindow','height=200,width=400,top=10,left=550')}> 
            <span className="song-title">{song.title}</span> 
        </button>
        )
    return(
        <div>
            <div className="icons-container">{songsList}</div>
            <div className="welcome-icons">Deezer's <br/> TOP 10</div>
            {showInfo && <SongInfo song={thesong} />}
        </div>
    ) 
}