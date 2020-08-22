import React, {Component} from 'react'
import '../styles/IconsMode.css'
import SongInfo from './SongInfo'

class IconsMode extends Component {
    state = {
        showInfo: false,
        song: {
            position: undefined,
            title: undefined,
            artist: undefined,
            duration: undefined
        }
    }
    
    render(){
        const songs = this.props.songs.map(song =>
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
                    this.setState({
                        showInfo: true,
                        song:{
                            position: song.position,
                            title: song.title,
                            album: song.album.title,
                            artist: song.artist.name,
                            duration: song.duration,
                            preview: song.preview
                    }})
                }
                }
                onMouseLeave={()=>
                    this.setState({showInfo: false})}
                onClick={()=>window.open(this.state.song.preview,'popUpWindow','height=200,width=400,top=10,left=550')}> 
                <span className="song-title">{song.title}</span> 
            </button>
            )
        return(
            <div>
                <div className="title-and-sort">
                    <div className="title">These are the 10 most popular songs on Deezer:</div>
                    <div className="sort">
                        <label className="select-form">
                            Sort by duration:
                            <select className="form-control select" onChange={this.props.handleSort}>
                                <option className="select" value="-">-</option>
                                <option className="select" value="asc">ASC</option>
                                <option className="select" value="desc">DESC</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="icons-container">{songs}</div>
                    {this.state.showInfo && <SongInfo song={this.state.song} />}
                </div>
            </div>
        )
    }
}

export default IconsMode