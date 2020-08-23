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
                <div className="icons-container">{songs}</div>
                {this.state.showInfo && <SongInfo song={this.state.song} />}
            </div>
        )
    }
}

export default IconsMode