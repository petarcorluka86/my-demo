import React from 'react'
import '../styles/ListMode.css'

function ListMode(props){
    const songList = props.songs.map(song =>
        <li className="list" key={song.id}> 
          <button>
            {song.position+". "+song.title}</button>
        </li>
        )
    return (
        <div className ="content">
            <div className="left-content-container">
                <ul>
                    {songList}
                </ul>
            </div>
            <div className="right-content-container">
                right
            </div>
        </div>
    )
}

export default ListMode;