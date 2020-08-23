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
            duration: undefined,
            preview: undefined,
            cover: undefined
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
                preview: song.preview,
                cover: song.artist.picture_big
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
                    <ul>
                        {songs}
                    </ul>
                </div>
                <div className="right-content-container">
                    <div className="sort-list">
                        <label className="select-form">
                            Sort by:
                            <select className="select" onChange={this.props.handleSort}>
                                <option className="select" value="posASC">Position ASC</option>
                                <option className="select" value="posDESC">Position DESC</option>
                                <option className="select" value="durASC">Duration ASC</option>
                                <option className="select" value="durDESC">Duration DESC</option>
                            </select>
                        </label>
                    </div>
                    <div className="list-song-info">
                        {this.state.showInfo && <div className="picture-frame"
                        style={{
                            background: "url("+this.state.song.cover+")",
                            backgroundSize: "cover"
                        }}
                        ></div>}
                        {this.state.showInfo && <SongInfo song={this.state.song} />}
                    </div>
                </div>
            </div>
        )
    }
}

export default ListMode;