import React, {Component} from 'react'
import '../styles/ListMode.css'
import SongInfo  from './SongInfo'

class ListMode extends Component{

    state = {
        showInfo: false,
        song: {
            position: undefined,
            title: undefined,
            artist: undefined,
            duration: undefined
        }
    }

    songHovered(song) {
        this.setState({
            showInfo: true,
            song:{
                position: song.position,
                title: song.title,
                album: song.album.title,
                artist: song.artist.name,
                duration: song.duration,
                preview: song.preview
            }
        })
    }

    render(){
        const songs = this.props.songs.map(song =>
            <li><button 
                    className="song-list-item" 
                    key={song.id} 
                    onMouseOver={()=> this.songHovered(song)}
                    onMouseLeave={()=> this.setState({showInfo: false})}
                    onClick={()=>window.open(this.state.song.preview,'popUpWindow','height=200,width=400,top=10,left=550')}>
                    {song.position + ". " + song.title}
                </button>
            </li>
            )
        return (
            <div className ="content">
                <div className="left-content-container">
                    <div className="title-list">These are the 10 most popular songs on Deezer:</div>
                    <ul>
                        {songs}
                    </ul>
                </div>
                <div className="right-content-container">
                    <div><div className="sort-list">
                        <label className="select-form">
                            Sort by duration:
                            <select className="select" onChange={this.props.handleSort}>
                                <option className="select" value="-">-</option>
                                <option className="select" value="asc">ASC</option>
        <option className="select" value="desc">DESC</option>
                            </select>
                        </label>
                    </div></div>
                    <div className="list-song-info">.
                        {this.state.showInfo && <SongInfo song={this.state.song} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListMode;