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
                <div className="">
                    <label className="select-form">
                        Sort by duration:
                        <select className="select" onChange={props.handleSort}>
                            <option className="select" value="-">-</option>
                            <option className="select" value="asc">ASC</option>
                            <option className="select" value="desc">DESC</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default ListMode;